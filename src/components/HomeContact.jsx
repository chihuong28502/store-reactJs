import React from "react";

function HomeContact() {
  return (
    <section id="home-contact">
      <div className="home-contact container">
        <div className="row justify-content-between w-100 px-5">
          <div className="col-md-6">
            <p className="home-contact__content">
              Trải nghiệm dịch vụ
              <br />
              <strong>cùng Hoàng Hoan ngay</strong>
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end rps-home-frm">
            <form className="home-contact__form" action="">
              <p>Thông tin liên hệ</p>
              <input type="email" placeholder="Email / Số điện thoại" />
              <button>Gửi</button>
            </form>
          </div>
        </div>
        <img
          className="image"
          src="http://cutuananh.devmaster.vn/images/ghe.png"
          alt="liên hệ"
        />
      </div>
    </section>
  );
}

export default HomeContact;
