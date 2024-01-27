"use client";

import { useState } from "react";
import ActionBarLayout from "~/components/manage-service/action-bar-layout";
import DisplayDataNumSelect from "~/components/manage-service/display-data-num-select";
import { ManagePagination } from "~/components/manage-service/manage-pagination";
import { getManageTableColumns } from "~/components/manage-service/manage-table/columns";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import DataTable from "~/components/ui/data-table";

import {
  OnCheck,
  OnDelete,
} from "~/components/manage-service/manage-service.type";
import { PaginationData } from "~/types/pagination";
import { getPhraseItemListMocks, rowsPerPageOptions } from "./meta";

/** @description 서버 데이터 개수(변경 필요) */
const totalRows = 100; // 전체 데이터 행의 수

export default function Page() {
  /** @todo 페이지네이션 상태 관리 필요, 현재는 프론트에서 페이지네이션 관리 */
  const [pagination, setPagination] = useState<PaginationData>({
    current: 1,
    limit: Number(rowsPerPageOptions[0].value),
    size: Math.ceil(totalRows / Number(rowsPerPageOptions[0].value)),
  });

  const startIndex = (pagination.current - 1) * pagination.limit;
  const endIndex = startIndex + pagination.limit;

  /** @todo 서버 데이터로 교체 */
  const data = getPhraseItemListMocks(totalRows).slice(startIndex, endIndex);

  const [checkedItems, setCheckedItems] = useState<Array<number>>([]);

  const onRowSizeChange = (rowsPerPage: string) => {
    /** @todo 숫자형변환했을 때 숫자가 아니면 오류 뜨도록 */
    setPagination({
      current: 1,
      limit: Number(rowsPerPage),
      size: Math.ceil(totalRows / Number(rowsPerPage)), // 총 페이지 수 재계산
    });
    setCheckedItems([]);
  };

  const onPageMove: Parameters<typeof ManagePagination>[0]["onPageMove"] = (
    pagination,
    next,
  ) => {
    setCheckedItems([]);
    setPagination((prev) => ({ ...prev, current: next }));
  };

  const currentPageDataIds = data.map((item) => item.id);

  const isAllDeleteChecked = checkedItems.length === currentPageDataIds.length;

  const onCheckAllDelete: OnCheck = (checked) => {
    setCheckedItems(checked ? currentPageDataIds : []);
  };

  const isDeleteChecked = (id: number) => checkedItems.includes(id);

  const onDeleteCheck: OnDelete = (id, checked) => {
    if (checked) setCheckedItems((prev) => [...new Set(prev).add(id)]);
    else setCheckedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  return (
    <div className="py-32 space-y-7">
      <ActionBarLayout
        left={
          <div className="flex justify-center items-center">
            <Checkbox
              checked={isAllDeleteChecked}
              className="m-4 data-[state=checked]:bg-slate-600"
              onCheckedChange={onCheckAllDelete}
            />
            <Button className="py-2 px-4 bg-slate-100 text-slate-900 font-semibold rounded-[6px] hover:bg-slate-100">
              삭제
            </Button>
          </div>
        }
        right={
          <div className="flex justify-center items-center">
            <DisplayDataNumSelect
              options={rowsPerPageOptions}
              onValueChange={onRowSizeChange}
            />
            <Button className="py-2 px-4 bg-slate-900 ml-[12px] font-semibold rounded-[6px] hover:bg-slate-900">
              추가하기
            </Button>
          </div>
        }
      />
      <DataTable
        columns={getManageTableColumns(isDeleteChecked, onDeleteCheck)}
        data={data}
        NoDataMsg={
          <span className="w-full inline-block text-center text-slate-600 text-base">
            현재 작성 된 글이 없습니다.
          </span>
        }
      />
      <ManagePagination
        pagination={pagination}
        onPageMove={onPageMove}
        className="justify-end"
      />
    </div>
  );
}
