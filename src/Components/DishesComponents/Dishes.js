import { useSelector } from "react-redux";
import dataDishes from "../../data/dataDishes";
import Dish from "../DishesComponents/Dish";
import { getSelectedCategory } from "../../redux/dishesSlice";
import "../../styles/DishCard.css"; 


 const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

       return (<div className='dish-container'>
         {dataDishes
         .filter(dish => {
            if (selectedCategory === 'ALLES') return true;
            return selectedCategory === dish.category;
         })
         .map(dish => <Dish key={dish.id} dish={dish} />)}
    </div>)
 }

 export default Dishes;

