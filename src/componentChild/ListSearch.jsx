import React, { useContext } from "react";
import "../css/products-allproducts.css";
import { context } from "../context/useContext";
import Product from "./Product";
function ListSearch() {
  const { dataSearch, valueSearch } = useContext(context);
  console.log(valueSearch);
  return (
    <div className="all-product__item container ">
      <div className="box-control">
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sắp xếp
          </button>
          <div
            className="dropdown-menu dropdown-menu-left"
            aria-labelledby="dropdownMenuButton"
          >
            <button className="dropdown-item" title="Giá cao đến thấp">
              <span />
              Giá cao đến thấp
            </button>
            <button className="dropdown-item" title="Giá thấp đến cao">
              <span />
              Giá thấp đến cao
            </button>
            <button className="dropdown-item" title="Độ nổi bật">
              <span />
              Độ nổi bật
            </button>
          </div>
        </div>
        <div className="group-filter">
          <div className="filter-item ">Dưới 5 triệu</div>
          <div className="filter-item ">Từ 5 - 10 triệu</div>
          <div className="filter-item ">Trên 10 triệu</div>
        </div>
      </div>
      {dataSearch.length == 0 ? (
        <div className="all-product__item--title">
          <h4>Không tìm thấy kết quả nào</h4>
        </div>
      ) : (
        <div className="all-product__item--title">
          <h4>Kết quả tìm kiếm cho từ khóa "{valueSearch}"</h4>
        </div>
      )}

      <div className="row">
        {dataSearch.slice(0, 4).map((item) => (
          <Product iconProduct={'fa-regular fa-heart'} product={item} key={item.id} />
        ))}
        {/* {dataSearch.slice(0, 4).map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="product-card">
              <img
                src={`http://apixm.devmaster.vn/${item.image}`}
                alt="san pham"
                className="product-card__image"
              />
              <div className="product-card__content">
                <span className="title">
                  {item.product_name} <br />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    direction: "ltr",
                    touchAction: "none",
                  }}
                >
                  <span
                    className="react-simple-star-rating"
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                      userSelect: "none",
                    }}
                  >
                    <span
                      className="empty-icons"
                      style={{
                        display: "inline-block",
                        color: "rgb(204, 204, 204)",
                      }}
                    >
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                    </span>
                    <span
                      className="filled-icons"
                      title="1 out of 5"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        color: "rgb(189, 148, 95)",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        width: "0%",
                      }}
                    >
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
                <br />
                <span className="old-price">
                  {Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.old_price)}
                </span>
                <br />
                <span className="new-price">
                  {Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}
                </span>
              </div>
              <div className="product-card__group-btn">
                <a href="/san-pham/phong-khach/ban-uong-nuoc">
                  <button className="btn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </a>
                <button className="btn">
                  <i className="fa-regular fa-heart" />
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
      <div className="load-more">
        <button type="button" className="load-more__btn">
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default ListSearch;
