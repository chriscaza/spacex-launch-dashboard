import { MdFavoriteBorder } from "react-icons/md";
import logo from '../../assets/spacex.png'
import { useNavigate } from "react-router";

function Menu() {
    const navigate = useNavigate();
    return(
        <div className="w-full flex justify-between items-center border-b border-white">
            <div>
                <button onClick={() => navigate("/")} className="cursor-pointer">
                    <img src={logo} alt="logo" className="h-20"/>
                </button>
            </div>
            <div className="pr-9">
                <button onClick={() => navigate("/favorites")} className="cursor-pointer">
                    <MdFavoriteBorder className="text-4xl text-white"/>
                </button>
            </div>
        </div>
    )
}

export default Menu;