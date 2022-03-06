import Header from "./components/Header";
import Footer from "./components/Footer";
import StockRecords from "./components/StockRecords";

import {InventoryProvider} from "./Context/InventoryContext";


function App() {
  return (
    <InventoryProvider>
      <Header />
        <StockRecords />
      <Footer />
    </InventoryProvider>
  );
}

export default App;
