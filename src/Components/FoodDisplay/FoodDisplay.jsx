import { useContext } from 'react'
import "./FoodDisplay.css";
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='FoodDisplay' id='FoodDisplay'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {
          food_list.map((item) => {
            console.log(category, item.category);
            if (category === "All" || category === item.category) {
              return (
                <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              );
            }
            return null;
          })
        }
      </div>
    </div>
  );
}

export default FoodDisplay;
