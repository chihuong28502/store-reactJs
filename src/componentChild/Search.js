import React, { useContext, useEffect, useState } from "react";
import handleClickSearch from "../handleJs/search";
import handleOnclickInputSearch from "../handleJs/handleOnclickInputSearch";
import apiXM from "../api/apiStore";
import { Link } from "react-router-dom";
import { context } from "../context/useContext";
import DataSearchUlLi from "./DataSearchUlLi";
import slugifyText from "../format/formatText";
function Search() {
  // handle design

  const [products, setproducts] = useState([]);
  let { valueSearch, setValueSearch } = useContext(context);
  useEffect(() => {
    const getAllProductsSearch = async () => {
      let res = await apiXM.get("/products");
      setproducts(res.data);
    };
    getAllProductsSearch();
  }, [valueSearch]);
  const handleGetValueSearch = (e) => {
    let value = e.target.value;
    setValueSearch(value);
  };
  const handleOnclickIconSearch = () => {
    setproducts(products);
  };

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    if (products.length !== 0) {
      setSearchResult(
        products.filter((fil) =>
          slugifyText(fil.title).includes(slugifyText(valueSearch))
        )
      );
    }
  }, [valueSearch]);
  return (
    <>
      <>
        <div
          href="/#"
          className="item-icon icon-search d-flex justify-content-center align-items-center position-relative"
          onClick={handleClickSearch}
        >
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="search-form">
          <input
            onChange={handleGetValueSearch}
            id="search"
            type="text"
            className="search-box"
            onClick={handleOnclickInputSearch}
          />
          <label className="label-search" htmlFor="search">
            Bạn cần tìm sản phẩm gì?
          </label>
          <Link
            to={`/search/${slugifyText(valueSearch)}`}
            className="search-form__search"
            onClick={handleOnclickIconSearch}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </Link>
        </div>
      </>
      {valueSearch === "" ? (
        ""
      ) : (
        <DataSearchUlLi valueSearch={valueSearch} product={searchResult} />
      )}
    </>
  );
}

export default Search;
