import { DownloadIcon } from "@/icons/Icons";

const Navber = () => {
    return (
        <div className="flex items-center justify-between  pl-[45px] pt-[32px] pr-[49px]">
           <div>
            <h2 className="text-white text-2xl font-semibold leading-[32px]">Welcome back, John</h2>
            <p className="text-[#AEB9E1] text-xs leading-[14px] mt-1">Measure your advertising ROI and report website traffic.</p>
           </div>
           <div className="text-white flex items-center gap-x-3">
            <button className="flex items-center gap-x-1.5 bg-[#0A1330] h-[30px] w-[99px] text-xs leading-[14px] font-medium rounded justify-center">Export data <DownloadIcon/></button>
            <button className="flex items-center gap-x-1.5 bg-[#CB3CFF] h-[30px] w-[93px] text-xs leading-[14px] font-medium rounded justify-center">Create report</button>
           </div>
        </div>
    );
};

export default Navber;