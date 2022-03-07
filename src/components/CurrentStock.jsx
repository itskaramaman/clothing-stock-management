import { useContext } from "react";
import InventoryContext from "../Context/InventoryContext";

function CurrentStock() {

    const {currentStocks} = useContext(InventoryContext);
    console.log(currentStocks);
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope='col'>Product Name</th>
                    <th scope='col'>Product ID</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Supplier</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Description</th>
                </tr>
            </thead>
            <tbody>
                {currentStocks.map(d=>(<tr key={d.transactionId}>
                    <td>{d.transactionId}</td>
                    <td>{d.productId}</td>
                    <td>{d.employee}</td>
                    <td>{d.type}</td>
                    <td>{d.entity}</td>
                    <td>{d.time}</td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default CurrentStock;