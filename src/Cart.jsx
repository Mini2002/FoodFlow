import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "./utils/cartSlice"


const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleCart = ()=>{
        dispatch(clearCart())
    }
    return (
        <div>
            this is the cart page
            <button onClick={handleCart}>clear</button>
        </div>
    )
}
export default Cart