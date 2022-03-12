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
        <button className="add-item" onClick={ props.onRemove }>−</button>
        <button className="remove-item" onClick={ props.onAdd }>+</button>
      </div>
    </li>
  );
}; 

export default CartItem;
