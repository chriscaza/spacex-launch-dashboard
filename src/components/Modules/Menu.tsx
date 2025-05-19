import { MdFavoriteBorder } from "react-icons/md";
import logo from '../../assets/spacex.png'

function Menu() {
    return(
        <div className="w-full flex justify-between items-center border-b border-white">
            <div>
                <img src={logo} alt="logo" className="h-20"/>
            </div>
            <div className="pr-9">
                <MdFavoriteBorder className="text-4xl text-white"/>
            </div>
        </div>
    )
}

export default Menu;