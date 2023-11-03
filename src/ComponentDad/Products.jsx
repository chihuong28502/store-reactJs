import React, { useEffect, useState } from "react";
import "../css/products-style.css";
import Slider from "../components/Slider";
import axios from "../api/apiStore";
import Product from "../componentChild/Product";
import { Link } from "react-router-dom";
import slugifyText from "../format/formatText";
function Products() {
  const [listProducts, setListProducts] = useState([]);
  const listCategories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  let iconProduct = "fa-regular fa-heart";
  useEffect(() => {
    axios
      .get("products")
      .then((response) => {
        setListProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(slugifyText("l's fashion ''s"));
  const elementAllproducts = listCategories.map((item, index) => {
    return (
      <div className="all-product__item" key={index}>
        <div className="all-product__item--title">
          <h4>{item}</h4>
          <Link className="see-all" to={slugifyText(item)}>
            Xem tất cả
          </Link>
        </div>
        <div className="row">
          {listProducts
            .filter((x) => slugifyText(x.category) === slugifyText(item))
            .slice(0, 4)
            .map((product) => (
              <Product
                iconProduct={iconProduct}
                product={product}
                key={product.id}
              />
            ))}
        </div>
      </div>
    );
  });
  return (
    <>
      <Slider />
      <div className="wrap-all-products">
        <div className="box-content all-product container">
          {elementAllproducts}
        </div>
      </div>
    </>
  );
}

export default Products;
