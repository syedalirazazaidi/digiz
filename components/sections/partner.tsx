import React from "react";
import Image from "next/image";
export default function Partner() {
  return (
    <main className="mx-2 md:mx-20 ">
      <div className=" my-10 mt-2 sm:mt-10  md:mt-10">
        <div className="flex items-center gap-4">
          <h1 className="text-[#E8081A] text-[14px] md:text-[20px] font-semibold">
            TECHNOLOGY PARTNERS
          </h1>
          <div className="h-1 w-20 bg-red-500 rounded" />
        </div>
        <h1 className="text-[#2B2B2B]  text-[35px] w-[380px] md:w-[600px] font-bold">
          We Collaborate With Companies That Have{" "}
          <span className="text-[#E8081A] font-medium">
            Out-Of-The-Box Ideas
          </span>
        </h1>
      </div>
      <div className="w-full md:w-max-[350px]">
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/06/Group-14101-1536x169.png"
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-full"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </main>
  );
}
