import './Hero.css'

function Hero() {
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <h1>Discover Your <br />
                        <span className='gradient'>Perfect Look</span></h1>
                    <p>Premium makeup products curated for the modern beauty enthusiast. Elevate your beauty routine with our luxurious collection.</p>
                    <a href="#someProduct"><button className='btn-shop-now'>Shop Now <i class="fa-solid fa-arrow-right"></i></button></a>
                </div>
            </section>
        </>
    )
}
export default Hero