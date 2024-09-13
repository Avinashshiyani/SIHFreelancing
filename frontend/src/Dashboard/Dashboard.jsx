import Navbar from "../Navbar/Navbar";
import SkillCard from "../Components/Card";
import { AiOutlineSearch } from "react-icons/ai";
import Intro from "../Components/Intro";
import FreelanceServices from "../Components/FreelanceCard";
import AddPostBtn from "../Components/AddPostBtn";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <AddPostBtn />
      <div className="grid items-center pt-[65px]">
        <Intro />
        <div className="flex items-center overflow-hidden">
          <SkillCard />
        </div>
        <div className="flex justify-start sm:px-6 lg:px-8 items-center">
          <span className="font-bold text-[30px]">Services</span>
        </div>
        <div className="flex justify-center items-center">
          <FreelanceServices />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
