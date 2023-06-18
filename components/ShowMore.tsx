"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore: FC<Props> = ({ pageNumber, isNext }) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", newLimit.toString());
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
