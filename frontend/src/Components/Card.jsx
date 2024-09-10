import React, { useRef } from "react";

// Card Component
const Card = ({ title, image }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center max-h-[88px] bg-white shadow-lg py-[12px] px-[20px] rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-[48px] h-[48px] rounded-md object-cover"
        />
        {/* Text */}
        <div className="flex flex-col pl-[16px]">
          <h3 className="text-[16px] py-[20px] text-start font-semibold text-gray-800 whitespace-nowrap">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

// Dashboard Freelancing Cards
const SkillCard = () => {
  const cardContainerRef = useRef(null);

  // Handle scroll left
  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Handle scroll right
  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const cards = [
    {
      title: "UI / UX",
      image: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    },
    {
      title: "Web Development",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721262.png",
    },
    {
      title: "Graphic Design",
      image: "https://cdn-icons-png.flaticon.com/512/1103/1103373.png",
    },
    {
      title: "Mobile Development",
      image: "https://cdn-icons-png.flaticon.com/512/1995/1995724.png",
    },
    {
      title: "SEO",
      image: "https://cdn-icons-png.flaticon.com/512/2493/2493105.png",
    },
    {
      title: "Content Writing",
      image: "https://cdn-icons-png.flaticon.com/512/2972/2972258.png",
    },
    {
      title: "Digital Marketing",
      image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    },
    {
      title: "E-commerce",
      image: "https://cdn-icons-png.flaticon.com/512/149/149052.png",
    },
    {
      title: "Branding",
      image: "https://cdn-icons-png.flaticon.com/512/889/889230.png",
    },
    {
      title: "Video Editing",
      image: "https://cdn-icons-png.flaticon.com/512/2855/2855946.png",
    },
  ];

  return (
    <div className="relative px-[10px] overflow-x-hidden  ">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute ml-2 left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
      </button>

      {/* Card Container */}
      <div
        ref={cardContainerRef}
        className="flex overflow-x-hidden  space-x-4 p-4 snap-x snap-mandatory no-scrollbar"
      >
        {cards.map((card, index) => (
          <div key={index} className="flex-none snap-start">
            <Card title={card.title} image={card.image} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute mr-2 right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 "
        >
          <path d="M9 18l6-6-6-6"></path>
        </svg>
      </button>
    </div>
  );
};

export default SkillCard;
