"use client";

import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  handleClick?: () => void;
  containerStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

const CustomButton: FC<Props> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: Props) => {
  return (
    <button
      disabled={isDisabled ? isDisabled : false}
      type={btnType ? `${btnType}` : "button"}
      className={`${containerStyles} custom-btn`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
