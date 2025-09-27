import './Footer.css'

function Footer() {
    return (
        <>
            <section className="footer-section" id='footer'>
                <div className="container">
                    <footer>
                        <div>
                            <p>BeautyShop</p>
                            <p>Your destination for premium makeup products and beauty essentials.</p>
                        </div>
                        <div className='list'>
                            <p>Shop</p>
                            <ul>
                                <li>New Arrivals</li>
                                <li>Best Sellers</li>
                                <li>Sale</li>
                                <li>Brands</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Support</p>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                                <li>Shipping Info</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Connect</p>
                            <ul>
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>YouTube</li>
                                <li>TikTok</li>
                            </ul>
                        </div>
                    </footer>

                    <div className='End-footer'>
                        <hr />
                        <p>© 2024 BeautyShop. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer

