import { createContext, useEffect, useState } from "react";

const InventoryContext = createContext();

export const InventoryProvider = ({children}) => {
    const [stockRecords, setStockRecords] = useState([]);
    const [currentStocks, setCurrentStocks] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(()=>{
        fetchStockRecords();
    }, []);

    useEffect(()=>{
        fetchCurrentStocks();
    }, [])

    useEffect(()=>{
        fetchSuppliers();
    }, [])

    useEffect(()=>{
        fetchCustomers();
    }, [])

    const fetchStockRecords = () => {
        setStockRecords([
            {transactionId: '5bdbdjbhjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbsjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbajb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbxjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'},
            {transactionId: '5bdbdjbvjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbbjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbnjb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbmjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'}
        ])
    }

    const fetchSuppliers = () => {
        setCurrentStocks([
            {transactionId: '5bdbdjbhjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbsjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbajb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbxjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'},
            {transactionId: '5bdbdjbvjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbbjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbnjb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbmjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'}
        ])
    }

    const fetchCustomers = () => {
        setCustomers([
            {transactionId: '5bdbdjbhjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbsjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbajb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbxjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'},
            {transactionId: '5bdbdjbvjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbbjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbnjb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbmjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'}
        ])
    }

    const fetchCurrentStocks = () => {
        setSuppliers([
            {transactionId: '5bdbdjbhjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbsjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbajb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbxjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'},
            {transactionId: '5bdbdjbvjb', productId: 'P123', employee: 'Jack', type: 'Stock out', entity: 'Cus - Customer name', time:'13:07', date: 'Feb 08, 2022', quantity:'05'},
            {transactionId: '5bdbdjbbjb', productId: 'P133', employee: 'Katie', type: 'Stock in', entity: 'Sup - Supplier name', time:'17:07', date: 'Feb 06, 2022', quantity:'12'},
            {transactionId: '5bdbdjbnjb', productId: 'P143', employee: 'Hank', type: 'Stock out', entity: 'Cus - Customer name', time:'23:07', date: 'Feb 07, 2022', quantity:'25'},
            {transactionId: '5bdbdjbmjb', productId: 'P153', employee: 'Travis', type: 'Stock in', entity: 'Sup - Supplier name', time:'33:07', date: 'Feb 09, 2022', quantity:'35'}
        ])
    }



 
    return (
        <InventoryContext.Provider value={{stockRecords, currentStocks, suppliers, customers}}>{children}</InventoryContext.Provider>
    )
}

export default InventoryContext;