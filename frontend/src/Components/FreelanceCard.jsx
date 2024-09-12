import React from "react";
import WebImage from "../assets/webdevelopment.webp";

// ServiceCard Component
const ServiceCard = ({
  title,
  description,
  image,
  price,
  profileImage,
  profileName,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          {/* <img
            src={profileImage}
            alt={profileName}
            className="w-8 h-8 rounded-full object-cover mr-3"
          /> */}
          <div>
            <p className="text-gray-800 font-semibold text-sm">{profileName}</p>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-semibold text-lg">{price}</span>
          <button className="bg-[#6F00FF] text-white py-2 px-4 rounded-lg hover:bg-[#5d24a6] focus:outline-none">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage of ServiceCard component
const FreelanceServices = () => {
  const services = [
    {
      title: "UI / UX Design",
      description:
        "Creating visually appealing and user-friendly designs for web and mobile",
      image: "https://via.placeholder.com/400x200?text=UI+UX+Design",
      price: "$150",
      profileImage: "https://via.placeholder.com/50?text=A",
      profileName: "Alice Johnson",
    },
    {
      title: "Web Development",
      description:
        "Building responsive and interactive websites with modern technologies.",
      image: "https://via.placeholder.com/400x200?text=Web+Development",
      price: "$300",
      profileImage: "https://via.placeholder.com/50?text=B",
      profileName: "Bob Smith",
    },
    {
      title: "Graphic Design",
      description:
        "Creating stunning graphics, logos, and marketing materials technologies.",
      image: "https://via.placeholder.com/400x200?text=Graphic+Design",
      price: "$200",
      profileImage: "https://via.placeholder.com/50?text=C",
      profileName: "Carol Davis",
    },
    {
      title: "Digital Marketing",
      description:
        "Promoting your brand through effective digital marketing strategies.",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwebsite-design&psig=AOvVaw00wbcuu-waywZW2rUmAEDf&ust=1726136827082000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMj84fPWuogDFQAAAAAdAAAAABAE",
      price: "$250",
      profileImage: "https://via.placeholder.com/50?text=D", // Example profile image
      profileName: "David Wilson",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={WebImage}
          price={service.price}
          profileImage={service.profileImage}
          profileName={service.profileName}
        />
      ))}
    </div>
  );
};

export default FreelanceServices;
