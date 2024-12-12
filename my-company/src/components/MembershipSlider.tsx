"use client";

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const membershipData = [
  {
    title: "STANDARD",
    price: "30",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: MdClose,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: MdClose,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "ULTIMATE",
    price: "45",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "PROFESSIONAL",
    price: "60",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: FaCheck,
        text: "No additional amenities",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px] px-4 sm:px-6 lg:px-8"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative h-full bg-black/90 border border-red-600 p-6">
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-white">{item.title}</h4>
              </div>
              {/* benefits */}
              <div className="space-y-6">
                <ul className="space-y-4">
                  {item.benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <li className="flex items-center gap-3 text-white text-lg" key={index}>
                        <IconComponent 
                          className={`text-xl ${
                            benefit.icon === FaCheck ? 'text-red-600' : 'text-gray-500'
                          }`} 
                        />
                        <span>{benefit.text}</span>
                      </li>
                    );
                  })}
                </ul>
                {/* price */}
                <div className="pt-6">
                  <p className="text-red-600 mb-6 flex items-baseline text-5xl font-bold">
                    <span className="text-3xl">$</span>
                    {item.price}
                    <span className="text-xl text-white ml-2">/month</span>
                  </p>
                  <button className="w-full bg-red-600 text-white py-4 text-lg font-semibold hover:bg-red-700 transition duration-300">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;

