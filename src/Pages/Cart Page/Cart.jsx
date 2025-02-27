import { useContext, useEffect } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removefromcart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('cartItems:', cartItems);
    console.log('food_list:', food_list);
  }, [cartItems, food_list]);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          food_list.map((item) => {
            console.log(`Item ID: ${item._id}, Quantity: ${cartItems[item._id]}`);
            if (cartItems[item._id] && cartItems[item._id] > 0) {
              console.log(`Rendering item ${item._id} with quantity ${cartItems[item._id]}`);
              return (
                <div key={item._id}>
                  <div className='cart-items-title cart-items-item'>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                    />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={() => removefromcart(item._id)} className='cross'>x</p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p className='promocodep'>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
