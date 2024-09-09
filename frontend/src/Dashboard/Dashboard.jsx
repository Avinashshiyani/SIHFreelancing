import Navbar from "../Navbar/Navbar";
import SkillCard from "../Components/Card";
import { AiOutlineSearch } from "react-icons/ai";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="grid items-center pt-[60px]">
        <div className="bg-emerald-800  p-8 flex items-center justify-center">
          <div className="max-w-4x mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Find the right <span className="text-emerald-300">freelance</span>
              <br />
              service, right away
            </h1>
            <div className="relative mb-16">
              <input
                type="text"
                placeholder="Search for any service..."
                className="w-full py-3 px-4 pr-12 rounded-full text-lg"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-800">
                <AiOutlineSearch className="w-6 h-6" />
              </button>
            </div>
            <div className="text-white">
              <p className="mb-4 text-sm opacity-80">Trusted by:</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {["Meta", "Google", "NETFLIX", "P&G", "PayPal", "Payoneer"].map(
                  (company) => (
                    <span key={company} className="text-sm font-semibold">
                      {company}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[70px]">
          <SkillCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
