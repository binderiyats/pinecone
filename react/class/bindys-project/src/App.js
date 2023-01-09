import "./App.css";
import data from "./data.json";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";

const Pagination = () => {
  return <div>Pagination</div>;
};

function App() {
  return (
    <>
      <Header />
      <main className="mt-3">
        <div className="container-sm">
          <Pagination />
          <div className="row g-3">
            {data.products.map((product, index) => {
              return <div className="col-sm-3">{ProductCard(product)}</div>;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
