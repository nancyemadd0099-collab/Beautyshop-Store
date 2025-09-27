import { useEffect, useState } from 'react'
import './Products.css'
import Product from './Product'

function Products() {

    let [myData, setMyData] = useState([])
    useEffect(() => {
        async function getData() {
            const result = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
            const data = await result.json()
            setMyData(data)
        }
        getData()
    },[])
    
    return (
        <>
            <section className='products-section'>
                <div className="container">
                    <div className="products">
                        {myData.slice(50, 98).map((product) => {
                            return <Product product={ product} key={product.id} />
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Products