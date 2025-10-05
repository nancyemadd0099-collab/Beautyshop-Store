import { Link } from 'react-router-dom'
import Card from './Card'
import './SomeProduct.css'

function SomeProduct() {
    return (
        <>
            <section className='someProduct-section' id='someProduct'>
                <div className="container">
                    <div className='header'>
                        <p>Some Customer</p>
                        <p>Discover our most-loved makeup products, chosen by beauty enthusiasts worldwide</p>
                    </div>

                    <div className="cards">
                        <Card title="Velvet Matte Lipstick - Rouge Passion" price="$28.99" imgCard="/download (2).jpg" />
                        <Card title="Rose Gold Eyeshadow Palette" price="$45.99" imgCard="/eyeshadow-palette.jpg" />
                        <Card title="Flawless Coverage Foundation" price="$39.99" imgCard="/foundation.jpg" />
                    </div>

                    <Link to="/products"><button className='btn-show-more'>Show More</button></Link>

                </div>
            </section>
        </>
    )
}
export default SomeProduct