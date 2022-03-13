import './CartItem.scss';

const CartItem = (props) => {

  const price = `£${Number(props.price).toFixed(2)}`;

  return (
    <li className="cart-item">
      <div>
        <h3 className="item-name">{props.name}</h3>
        <div>
          <span className="item-price">{price}</span>
          <span className="item-amount">  x{props.amount}</span>
        </div>
      </div>
      <div>
        <button className="increment gap-left" onClick={ props.onAdd }>+</button>
        <button className="decrement" onClick={ props.onRemove }>−</button>
      </div>
    </li>
  );
}; 

export default CartItem;
