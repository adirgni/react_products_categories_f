import AllProducts from "./components/allProducts/AllProducts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  console.log('App.js start')
  return (
    <div>
      <Header />
      <AllProducts />
      <Footer />
    </div>
  )
}

export default App
