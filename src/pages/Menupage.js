import Dishes from "../Components/DishesComponents/Dishes";
import AllCategories from "../Components/Filter/AllCategories";
import Navbar from "../Navbar";



const Menupage = () => {
    return (
        <div className="menupage">

            <div className="navbar-overlay">
                <Navbar />
            </div>

<AllCategories />
<Dishes />

            
            
        </div>
    );
};

export default Menupage;