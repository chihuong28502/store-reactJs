import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/useContext";
import Product from "./Product";
import axios from "../api/xm";
import Control from "./Control";

function ShowAllWishList() {
  let [numberLoad, setNumberLoad] = useState(4);
  let iconProduct = "fa-solid fa-heart-crack";
  const { local, setLocal } = useContext(context);
  const [sort, setSort] = useState("");
  const handleShowAllProducts = () => {
    setNumberLoad(numberLoad + local.length);
    console.log(numberLoad);
  };
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("wishlistStoreClosething");
      setLocal(res.data);
    };
    getData();
  }, []);
  // }, []);
  const [filters, setFilters] = useState();
  const handleFilter = (filter) => {
    setFilters(filter);
  };
  useEffect(() => {}, [numberLoad]);
  return (
    <div className="box-content all-product">
      {/* <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="http://cutuananh.devmaster.vn/images/AnhCatTC/trai-nghiem1.jpg"
              alt=""
              width={1100}
              height={500}
            />
            <div className="carousel-btn">
              <button className="btn-buy">Mua ngay</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="all-product__item container">
        <Control
          product={local}
          sort={sort}
          setSort={setSort}
          onFilter={handleFilter}
        />
        <div className="all-product__item--title">
          <h4>Danh sách yêu thích ({local.length}sản phẩm) </h4>
        </div>
        <div className="row">
          {filters === undefined
            ? local
                .slice(0, numberLoad)
                .map((item) => (
                  <Product
                    iconProduct={iconProduct}
                    filters={filters}
                    product={item}
                    key={item.id}
                  />
                ))
            : filters
                .slice(0, numberLoad)
                .map((item) => (
                  <Product
                    iconProduct={iconProduct}
                    filters={filters}
                    product={item}
                    key={item.id}
                  />
                ))}
          {/* {local.map((item) => (
            <Product iconProduct={iconProduct} product={item} key={item.id} />
          ))} */}
        </div>
        <div className="load-more">
          <button
            type="button"
            className="load-more__btn"
            onClick={handleShowAllProducts}
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowAllWishList;
