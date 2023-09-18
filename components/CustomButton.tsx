"use client";

import Image from "@/node_modules/next/image"
import { CustomButtonProps } from "@/types/index";

const CustomButton = ({ title, containerStyles, 
  handleClick }: CustomButtonProps) => {

  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={'flex-1'}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton