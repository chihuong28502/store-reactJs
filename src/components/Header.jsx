import ProductsHeart from "../componentChild/ProductsHeart";
import ProductsCart from "../componentChild/ProductsCart";
import Search from "../componentChild/Search";
import logo from "../pictures/logo.png";
import Navigate from "../componentChild/Navigate";
function Header() {
  return (
    <div className="header container-fluid w-100 d-flex m-auto position-fixed">
      <div className="container d-flex m-auto align-items-center justify-content-between row">
        <div className="head-logo col-3">
          <a className="w-100" href="/#">
            <img className="img-logo" src={logo} alt="" />
          </a>
        </div>
        <Navigate />
        <div className="list-icon gap-4 d-flex justify-content-end col-3">
          <ProductsCart />
          <ProductsHeart />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
