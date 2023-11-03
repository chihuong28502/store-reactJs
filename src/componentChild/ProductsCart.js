import React from "react";

function ProductsCart() {
  return (
    <div
      href="/#"
      className="item-icon icon-cart d-flex justify-content-center align-items-center position-relative"
    >
      <a href="/gio-hang">
        <i className="fa-solid fa-bag-shopping" />
      </a>
      <div className="box box-cart">
        <div className="box__empty">
          <p className="box__title">Giỏ hàng của bạn đang trống !</p>
          <a href="/san-pham">
            <div className="check__btn">Mua hàng ngay</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductsCart;
