import React, { useEffect, useState } from "react";

function Control({ onFilter, product, sort, setSort }) {
  const handleSort = (e) => {
    setSort(e.target.value);
    console.log(product);
    if (e.target.value !== "" || e.target.value !== undefined) {
      let arr = e.target.value.split("-");
      if (arr[0] === "price") {
        if (arr[1] === "ASC") {
          product.sort((x, y) => {
            console.log(1);
            return parseFloat(y.price) - parseFloat(x.price);
          });
        } else {
          product.sort((x, y) => {
            console.log(2);

            return parseFloat(x.price) - parseFloat(y.price);
          });
        }
      } else {
        if (arr[1] === "ASC") {
          product.sort((x, y) => {
            return y.likes - x.likes;
          });
        }
      }
    }
  };
  const [filter, setFilter] = useState();
  useEffect(() => {}, [sort]);
  const handleFilter = (e) => {
    let arrFill = product;
    let className = e.target.className;
    if (className.includes("min")) {
      console.log(1);
      setFilter(arrFill.filter((item) => item.price < 20));
    } else if (className.includes("medium")) {
      console.log(2);
      setFilter(arrFill.filter((item) => item.price > 20 && item.price < 60));
    } else {
      console.log(3);
      setFilter(arrFill.filter((item) => item.price > 60));
    }
  };
  onFilter(filter);

  return (
    <div className="box-control">
      <div className="dropdown">
        <select
          value={sort}
          onChange={handleSort}
          className="form-control px-3 py-2"
        >
          <option className="py-3 px-3 d-block">Sắp Xếp</option>
          <option className="py-3 px-3 d-block" value="price-ASC">
            Cao tới thấp
          </option>
          <option className="py-3 px-3 d-block" value="price-DESC">
            Thấp tới cao
          </option>
          <option className="py-3 px-3 d-block" value="rating-ASC">
            Nổi bật
          </option>
        </select>
      </div>
      <div className="group-filter">
        <div className="filter-item min" onClick={handleFilter}>
          Dưới 20$
        </div>
        <div className="filter-item medium" onClick={handleFilter}>
          Từ 20$ - 60$
        </div>
        <div className="filter-item max" onClick={handleFilter}>
          Trên 60$
        </div>
      </div>
    </div>
  );
}

export default Control;
