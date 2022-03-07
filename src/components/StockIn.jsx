function StockIn() {
    return (
        <form className="col-4">
            <input type="text" className="form-control form-control-lg mb-3" placeholder="Product ID"/>
            <input type="text" className="form-control form-control-lg mb-3" placeholder="Product Name"/>
            <input type="text" className="form-control form-control-lg mb-3" placeholder="Category"/>
            <input type="text" className="form-control form-control-lg mb-3" placeholder="Supplier"/>
            <input type="text" className="form-control form-control-lg mb-3" placeholder="Quantity"/>
            <input type="submit" className="btn btn-lg btn-success w-100 mb-3" value="Add To Stocks" />
        </form>    
    ) 
}

export default StockIn;