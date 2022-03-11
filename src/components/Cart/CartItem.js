const CartItem = (props) => {

  const price = `$${Number(props.price).toFixed(2)}`;

  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>{price}</span>
          <span>x {props.amount}</span>
        </div>
      </div>
      <div>
        <button onClick={ props.onRemove }>−</button>
        <button onClick={ props.onAdd }>+</button>
      </div>
    </li>
  );
}; 

export default CartItem;
