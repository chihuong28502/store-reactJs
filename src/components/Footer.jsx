import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section id="footer">
      <div className="allInfo container">
        <div className="info">
          <h5>thông tin chung</h5>
          <p>công ty tnhh hoàng hoan</p>
          <ul className="list-footer">
            <li>
              <div className="icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <a href="tel:0999.999.999">0999.999.999</a>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa-regular fa-envelope" />
              </div>
              <div>
                <a href="mailto:cskh@hoanghoan.vn">cskh@hoanghoan.vn</a>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div>Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội</div>
            </li>
          </ul>
        </div>
        <div className="info">
          <h5>về chúng tôi</h5>
          <ul className="list-footer">
            <li>
              <NavLink to="/">Giới thiệu</NavLink>
            </li>
            <li>
              <NavLink to="/products">Sản phẩm</NavLink>
            </li>
            <li>
              <NavLink to="/news">Tin tức</NavLink>
            </li>
            <li>
              <a href="/">Đối tác</a>
            </li>
            <li>
              <NavLink to="/contact">Liên hệ</NavLink>
            </li>
          </ul>
        </div>
        <div className="info">
          <h5>kết nối với chúng tôi</h5>
          <div className="social">
            <a href="/">
              <img
                src="http://cutuananh.devmaster.vn/images/iconFooter/icon_fb_pro.jpg"
                alt="social images"
              />
            </a>
            <a href="/">
              <img
                src="http://cutuananh.devmaster.vn/images/iconFooter/icon_zalo_pro.jpg"
                alt="social images"
              />
            </a>
            <a href="/">
              <img
                src="http://cutuananh.devmaster.vn/images/iconFooter/icon_email_pro.jpg"
                alt="social images"
              />
            </a>
          </div>
          <img
            src="http://cutuananh.devmaster.vn/images/iconFooter/chatluong.jpg"
            alt="chứng nhận"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
