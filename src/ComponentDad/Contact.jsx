import React from "react";
import "../css/contact-style.css";
import Slider from "../components/Slider";
function Contact() {
  return (
    <>
      <Slider />
      <div className="box-content">
        <div className="wrapper-box container w-75">
          <div className="row">
            <div className="col-md-6">
              <div className="thumbnail h-100">
                <img
                  src="http://cutuananh.devmaster.vn/images/AnhCat/sp2.jpg"
                  alt="anh lien he"
                  className="h-100 w-100 "
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="thumbnail">
                <p>liên hệ với chúng tôi</p>
                <form className="form" id="form">
                  <div className="inputBox">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required="required"
                    />
                    <span htmlFor="username">Họ tên</span>
                  </div>
                  <div className="inputBox">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      required="required"
                    />
                    <span htmlFor="email">Email</span>
                  </div>
                  <div className="inputBox">
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      required="required"
                    />
                    <span htmlFor="phone">Số điện thoại</span>
                  </div>
                  <div className="inputBox">
                    <input
                      id="desc"
                      type="text"
                      name="description"
                      required="required"
                    />
                    <span htmlFor="description">Nội dung</span>
                  </div>
                  <button type="submit" className="box-contact__btn">
                    Gửi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
