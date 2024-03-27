import ProductsInput from "./components/ProductsInput"
import ShowProducts from "./components/ShowProducts"
import "./App.css"
import Cart from "./components/Cart"

const App = ()=>{
  return (
    <div className="">
      <ProductsInput/>
      <ShowProducts/>
      <Cart/>
    </div>
  )
}
export default App