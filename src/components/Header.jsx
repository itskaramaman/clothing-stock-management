function Header() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand">CLOTHING STOCK MANAGEMENT</span>
                    <span className="float-right text-light">Emp Name</span>
                </div>
            </nav>
            <nav className="navbar container navbar-expand-lg navbar-light bg-light">
                <div className=" navbar-nav">
                    <h5 className="nav-item nav-link active p-3">Stock Records</h5>
                    <h5 className="nav-item nav-link p-3">Stock In</h5>
                    <h5 className="nav-item nav-link p-3">Stock Out</h5>
                    <h5 className="nav-item nav-link p-3">Current Stock</h5>
                    <h5 className="nav-item nav-link p-3">Entity List</h5>
                </div>
                <form className="">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </nav>
        </>
    )
}


export default Header;