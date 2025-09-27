import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'


function Navbar() {
    const items = useSelector((state) => state.counter.items);

    return (
        <>
            <section className="navbar-section">
                <div className="container">
                    <nav>

                        <p className='gradient'><i class="fa-regular fa-heart heart"></i> BeautyShop</p>

                        <div className="links">
                            <div><Link to={"/"}><button>Home</button></Link></div>
                            <div><Link to={"/products"}><button>Products</button></Link></div>
                            <div><Link to={"./login"}><button><i class="fa-solid fa-user"></i></button></Link></div>
                            <div className='buy'>
                                <Link to={"/reset"}>
                                    <button><i class="fa-solid fa-bag-shopping"></i>
                                        <span>{items.length}</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar