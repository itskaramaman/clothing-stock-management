function StockOut() {
    return (
        <form className="col-4">
        <input type="text" className="form-control form-control-lg mb-3" placeholder="Product ID"/>
        <input type="text" className="form-control form-control-lg mb-3" placeholder="Quantity"/>
        <input type="text" className="form-control form-control-lg mb-3" placeholder="Supplier"/>

        <input type="submit" className="btn btn-lg btn-success w-100 mb-3" value="Stock Out" />
        </form>
    ) 
}

export default StockOut;