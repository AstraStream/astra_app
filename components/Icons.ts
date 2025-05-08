import { 
    RiArrowDownSLine,
    RiCloseLine, 
    RiEye2Line, 
    RiEyeOffLine, 
    RiLoader2Line, 
    RiMenu2Fill,
    RiSearch2Fill,
} from "@remixicon/react";
import { 
    WalletIcon,
    BellIcon, 
    ChevronRightIcon,
    ChevronLeftIcon,
    PlayIcon
} from "@heroicons/react/24/solid"
import { EyeClosedIcon } from "lucide-react";

const Icons = {
    eyeOpen: RiEye2Line,
    eyeClosed: RiEyeOffLine,
    eyeClosed2: EyeClosedIcon,
    chevronRight: ChevronRightIcon,
    chevronLeft: ChevronLeftIcon,
    loader: RiLoader2Line,
    close: RiCloseLine,
    menu: RiMenu2Fill,
    arrowDown: RiArrowDownSLine,
    search: RiSearch2Fill,
    wallet: WalletIcon,
    notification: BellIcon,
    play: PlayIcon
}

export default Icons;