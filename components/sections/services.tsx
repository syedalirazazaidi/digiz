import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Services() {
  const rednerServices = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Mobile Application",
      desription:
        "If you’re looking for a company that can develop the perfect mobile application for your brand, then Diginsy is your way to go.",
      title: "Learn More",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Game Development",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "Learn More",
      id: "02",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: " Blockchain Development",
      desription:
        "Harness the power of blockchain with Diginsy. We develop secure and innovative decentralized applications.",
      title: "Learn More",
      id: "03",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "  Augmented Reality",
      desription:
        "Elevate user experiences with Diginsy’s AR apps. Merging virtual and real, we create standout interactive applications.",
      title: "Learn More",
      id: "04",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "  Web Development",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "Learn More",
      id: "05",
    },

    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Digital Marketing",
      desription:
        "To help your brand reach your target audience, we offer state-of-the-art digital marketing services to increase sales and grow your brand online",
      title: "Learn More",
      id: "06",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14098.png",
      name: "Creative Branding",
      desription:
        "Branding is a key factor which when done right, can help your brand travel miles. Branding is what sets your brand apart from the competition…",
      title: "Learn More",
      id: "07",
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
              <div className="flex items-center text-center gap-2 md:gap-6">
                <h1 className="text-black  text-[16px] font-[500] leading-6">
                  SERVICES{" "}
                </h1>
                <div className="h-1 w-20 bg-red-500 rounded" />
              </div>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 leading-tight w-[350px] md:w-[400px] text-gray-900">
                Best Services We Can Offer For You
                <span className="text-red-700"> !</span>
              </h1>
            </div>
            <p className="lg:w-4/6 w-full leading-relaxed text-gray-500">
              Consumers today predominantly use digital methods to research
              products. Before engaging with a brand or product, we often
              investigate it online. Meanwhile, 51% of consumers admit to using
              Google as their primary tool for product research before making a
              purchase.
            </p>
          </div>
          <div className="flex flex-wrap  items-center -m-4  ">
            {rednerServices.map(({ name, img, desription, title }) => (
              <div className=" xl:w-1/3 md:w-1/2 p-2 mt-10" key={name}>
                <div className="relative p-2 rounded-lg border-2">
                  <Image
                    src={img}
                    width={80}
                    height={80}
                    className="absolute -top-12 left-6"
                    alt="digincy"
                  />
                  <h2 className="text-lg mt-12 text-gray-900 font-medium title-font mb-4">
                    {name}
                  </h2>
                  <p className=" text-base text-[12px] leading-6 tracking-wide">
                    {desription}
                  </p>
                  <h3 className=" text-[14px] font-medium leading-6 tracking-wide">
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
