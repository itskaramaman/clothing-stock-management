import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StockRecords from "./components/StockRecords";

import {InventoryProvider} from "./Context/InventoryContext";
import StockIn from "./components/StockIn";
import StockOut from "./components/StockOut";
import EntityList from "./components/EntityList";
import CurrentStock from "./components/CurrentStock";


function App() {
  return (
    <InventoryProvider>
      <Router>
        <Header />
          <div className='container mt-2'>
            <Routes>
              <Route exact path="/" element={<StockRecords />} />
              <Route exact path="/stock-in" element={<StockIn />} />
              <Route exact path="/stock-out" element={<StockOut />} />
              <Route exact path="/entity-list" element={<EntityList />} />
              <Route exact path="/current-stock" element={<CurrentStock />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </InventoryProvider>
  );
}

export default App;
