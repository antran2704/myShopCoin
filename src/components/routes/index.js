import BuyHistory from "../Pages/BuyHistory/BuyHistory";
import Coin from "../Pages/Coins/Coins";
import Deposit from "../Pages/Deposit/Deposit";
import MyCoin from "../Pages/MyCoin/MyCoin";
import MyProfile from "../Pages/MyProfile/MyProfile";
import WidthDrawal from "../Pages/WidthDrawal/WidthDrawal";


const routes = [
    {
        to: "/my-coin",
        component: MyCoin
    },
    {
        to: "/my-history",
        component: BuyHistory
    },
    {
        to: "/my-draw",
        component: WidthDrawal,
    },
    {
        to: "/my-deposit",
        component: Deposit,
    },
    {
        to: "/my-profile",
        component: MyProfile,
    },
    {
        to: "/coin",
        component: Coin,
    },
]

export default routes;