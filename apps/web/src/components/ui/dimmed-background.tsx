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
        "z-[1000] fixed inset-0 bg-black bg-opacity-40",
      )}
      onClick={onClose}
    />
  );
};

export default DimmedBackground;
