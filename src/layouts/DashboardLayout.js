import Navber from "@/app/navber/Navber";
import Sidebar from "@/app/sidebar/Sidebar";


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="bg-[#081028] h-screen w-full ">
      <Navber/>
     <div>
     {children}
     </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
