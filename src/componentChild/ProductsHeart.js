import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BoxWishList from "./BoxWishList";
import { context } from "../context/useContext";
function ProductsHeart() {
  const { responseData } = useContext(context);
  const { local, setLocal } = useContext(context);
  useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem("wishlistItems")));
  }, [responseData]);
  return (
    <Link
      to={"/danh-sach-yeu-thich"}
      className="item-icon icon-heart  d-flex justify-content-center align-items-center position-relative"
    >
      <i className="fa-regular fa-heart" />
      <div className="box-heart">
        {local === null || (local !== null && local.length === 0) ? (
          // /products
          <div className="box-wishlist__empty position-absolute ">
            <p className="box__title">Danh sách của bạn đang trống !</p>
            <a href="/san-pham" className="d-block text-center">
              <Link to={"/products"} className="check__btn ">
                xem sản phẩm ngay
              </Link>
            </a>
          </div>
        ) : (
          <div className=" box-wishlist">
            <div className="box__title">Danh sách yêu thích</div>
            {local.map((item) => (
              <BoxWishList wishlist={item} key={item.id} />
            ))}
            <div className="check">
              <p>có {local.length} sản phẩm</p>
              <Link className="check__btn" to={"/danh-sach-yeu-thich"}>
                Xem chi tiết
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="number-productWishlist">{local?.length}</div>
    </Link>
  );
}

export default ProductsHeart;
