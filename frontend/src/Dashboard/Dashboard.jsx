import Navbar from "../Navbar/Navbar";
import SkillCard from "../Components/Card";
import { AiOutlineSearch } from "react-icons/ai";
import Intro from "../Components/Intro";
import FreelanceServices from "../Components/FreelanceCard";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="grid items-center pt-[65px]">
        <Intro />
        <div className="flex items-center overflow-hidden">
          <SkillCard />
        </div>
        <div className="flex justify-center items-center">
          <FreelanceServices />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
