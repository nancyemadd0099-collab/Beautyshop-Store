import { useDispatch } from 'react-redux'
import './ButtonAdd.css'
import { addToCart } from './counter.js'

function ButtonAdd({ product }) {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(addToCart(product))} className='btn-buy'><i class="fa-solid fa-cart-shopping"></i> add to Cart</button>
        </div>
    )
}
export default ButtonAdd