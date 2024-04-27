import { FaPython, FaJava } from "react-icons/fa";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { ImCool2 } from "react-icons/im";
import { GiReactor } from "react-icons/gi";
import { DiJavascript } from "react-icons/di";
import { FaUniversity } from "react-icons/fa";
import { RiCreativeCommonsByLine } from "react-icons/ri";
import { FcBiotech } from "react-icons/fc";
export const rooms = [
  {
    name: "BBA",
    icon: <FaUniversity className="text-black" />,
  },
  {
    name: "BCA",
    icon: <DiJavascript className="text-lime-400" />,
  },
  {
    name: "Btech",
    icon: <FcBiotech />,
  },
  {
    name: "MCA",
    icon: <ImCool2 className="text-yellow-400" />,
  },
  {
    name: "Mtech",
    icon: <GiReactor className="text-red-400" />,
  },
  { name: "MBA", icon: <FaUniversity className="text-purple-400" /> },
  {
    name: "Common ",
    icon: <RiCreativeCommonsByLine className="text-red-300" />,
  },
];
