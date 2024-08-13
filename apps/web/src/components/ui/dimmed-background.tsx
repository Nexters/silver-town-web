import React from "react";
import { cn } from "~/libs/utils";

interface Props extends React.DOMAttributes<HTMLDivElement> {
  classNames?: Array<string>;
  onClose?: () => void;
}

const DimmedBackground = ({ classNames, onClose, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={cn(
        classNames,
        "z-[1000] fixed inset-0 bg-[#000000] bg-opacity-75",
      )}
      onClick={onClose}
    />
  );
};

export default DimmedBackground;
