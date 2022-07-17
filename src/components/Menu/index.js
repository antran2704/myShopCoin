import { BiHistory, BiMoney, BiStoreAlt } from "react-icons/bi";
import { BsPersonLinesFill, BsCoin } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { RiHandCoinLine } from "react-icons/ri";

const data = [
  {
    to: "/",
    title: "Buy Coins",
    icon: BiStoreAlt,
  },
  {
    to: "/my-coin",
    title: "My Coins",
    icon: RiHandCoinLine,
  },
  {
    to: "/coin",
    title: "Coins",
    icon: BsCoin,
  },
  {
    to: "/my-history",
    title: "History",
    icon: BiHistory,
  },
  {
    to: "/my-deposit",
    title: "Deposit",
    icon: BiMoney,
  },
  {
    to: "/my-draw",
    title: "Withdraw",
    icon: BsPersonLinesFill,
  },
  {
    to: "/my-profile",
    title: "My Profile",
    icon: ImProfile,
  },
];

export default data