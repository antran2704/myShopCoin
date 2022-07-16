import { BiHistory, BiMoney, BiStoreAlt } from "react-icons/bi";
import {BsPersonLinesFill} from "react-icons/bs"
import { RiHandCoinLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";


const data = [
    {
        to: "/my-coin",
        title: "My Coins",
        icon: RiHandCoinLine
    },
    {
        to: "/my-history",
        title: "History",
        icon: BiHistory
    },
    {
        to: "/my-deposit",
        title: "Deposit",
        icon: BiMoney
    },
    {
        to: "/my-draw",
        title: "Withdraw",
        icon: BsPersonLinesFill
    },
    {
        to: "/my-coin",
        title: "My Profile",
        icon: ImProfile
    }
]

export default data;