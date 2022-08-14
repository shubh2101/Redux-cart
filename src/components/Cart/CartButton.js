import classes from './CartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
 const cartQuantity = useSelector(state => state.cart.totalQuantity)
const dispatch = useDispatch()
const toggleHandler = () => {
  dispatch(uiActions.toggle())
}
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
