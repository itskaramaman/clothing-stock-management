import {useContext} from 'react';
import InventoryContext from '../Context/InventoryContext';

function StockRecords() {

    const {stockRecords} = useContext(InventoryContext);
    console.log(stockRecords);
    return (
        <div className='container mt-2'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {stockRecords.header.map(h => (<th scope='col'>{h}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {stockRecords.data.map(d=>(<tr>
                        <td>{d.transactionId}</td>
                        <td>{d.productId}</td>
                        <td>{d.employee}</td>
                        <td>{d.type}</td>
                        <td>{d.entity}</td>
                        <td>{d.time}</td>
                        <td>{d.date}</td>
                        <td>{d.quantity}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default StockRecords;