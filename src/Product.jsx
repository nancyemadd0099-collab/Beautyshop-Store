import ButtonAdd from './ButtonAdd'
import './Product.css'

function Product({ product }) {
    return (
        <>
            <div className='product'>
                <div className='image-product'>
                    <img src={product.image_link} alt={product.name} />
                </div>
                <div className='about-product'>
                    <p className='title'>{product.name}</p>
                    <p className='price'> <span>$</span> {product.price} </p>
                </div>
                <ButtonAdd product={product}/>
            </div>
        </>
    )
}

export default Product