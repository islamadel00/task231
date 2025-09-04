import "./Nav.css"
function Nav() {
    return (
        <>
            <nav>
                <div className="container nav">
                    <h2 className="logo">NEWHOME</h2>

                    <ul className="nav-links">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">FURNITURES</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>

                    <div className="nav-icons">
                        <a href="#"><i className="fa-solid fa-user"></i> LOGIN</a>
                        <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                      {/* hamburger */}
    <div class="hamburger">&#9776;</div>
                </div>
            </nav>
        </>
    )
}

export default Nav