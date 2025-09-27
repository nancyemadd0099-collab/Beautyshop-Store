import './Home.css'

function Home() {
    return (
        <>
            <section className='Home-section' id='Home'>
                <div className='container'>
                    <div className='features'>
                        <div><i className="fa-solid fa-truck"></i></div>
                        <h5>Free Shipping</h5>
                        <p>Free delivery on orders over $50 </p>
                    </div>
                    <div className='features'>
                        <div><i className="fa-solid fa-shield "></i></div>
                        <h5>Quality Guarantee</h5>
                        <p>100% authentic products guaranteed</p>
                    </div>
                    <div className='features'>
                        <div><i className="fa-solid fa-rotate "></i></div>
                        <h5>Easy Returns</h5>
                        <p>30-day hassle-free returns</p>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Home