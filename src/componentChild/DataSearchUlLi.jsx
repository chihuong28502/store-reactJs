import React, { useContext } from "react";
import "../css/dataSearchUlLi.css";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { context } from "../context/useContext";
function DataSearchUlLi({ product, valueSearch }) {
  const { setDataSearch } = useContext(context);
  const handleOnclickSeeAll = () => {
    setDataSearch(product);
  };
  return (
    <div className="data-search">
      {product.slice(0, 3).map((item, index) => (
        <a href="/san-pham/phong-tam/bon-rua-mat" key={index}>
          <div className="data-search__item">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <i className="fa-solid fa-angle-right" />
          </div>
        </a>
      ))}
      <div className="data-search__item">
        <Link
          onClick={handleOnclickSeeAll}
          to={`/search/${slugify(valueSearch)}`}
        >
          Xem tất cả kết quả
        </Link>
      </div>
    </div>
  );
}

export default DataSearchUlLi;
