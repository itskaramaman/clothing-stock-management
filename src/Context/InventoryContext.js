import { createContext, useEffect, useState } from "react";

const InventoryContext = createContext();

export const InventoryProvider = ({children}) => {
    const [stockRecords, setStockRecords] = useState({header: [], data: []});
    // const [currentStocks, setCurrentStocks] = useState([]);
    // const [suppliers, setSuppliers] = useState([]);
    // const [customers, setCustomers] = useState([]);

    useEffect(()=>{
        fetchStockRecords();
    }, []);

    const fetchStockRecords = () => {
        setStockRecords({
            header: ['Transaction ID', 'Product ID', 'Employee', 'Type', 'Entity', 'Time', 'Date', 'Quantity'],
            data: [
                {transactionId: '5bdbdjbhjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
                {transactionId: '5bdbdjbhjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
                {transactionId: '5bdbdjbhjb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
                {transactionId: '5bdbdjbhjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'},
                {transactionId: '5bdbdjbhjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
                {transactionId: '5bdbdjbhjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
                {transactionId: '5bdbdjbhjb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
                {transactionId: '5bdbdjbhjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'}
            ]
        })
    }
 
    return (
        <InventoryContext.Provider value={{stockRecords}}>{children}</InventoryContext.Provider>
    )
}

export default InventoryContext;