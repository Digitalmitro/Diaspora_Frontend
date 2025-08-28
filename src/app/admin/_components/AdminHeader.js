import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import feature2 from "../../../../public/feature2.png";
function AdminHeader() {
  return (
    <div className="flex pt-10 md:py-6 flex-wrap justify-between md:justify-evenly items-center gap-4 p-2">
      
      {/* Search Box */}
      <div className="flex items-center justify-between p-2 border bg-[#F0F0F0C7] w-full sm:w-72 md:w-96">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-2 bg-transparent outline-none text-sm md:text-base"
        />
        <FiSearch className="text-gray-600 text-lg" />
      </div>
      {/* Admin Profile */}
      <div className="flex items-center gap-2">
        <Image
          src={feature2}
          alt="Admin"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-sm md:text-base font-medium">Admin Name</span>
        <span className="text-xs md:text-sm">▼</span>
      </div>
    </div>
  );
}

export default AdminHeader;
