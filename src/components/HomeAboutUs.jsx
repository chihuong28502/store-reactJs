import React from "react";
import dataAboutUs from "../data/dataAboutUs";
import dataPolicy from "../data/dataPolicy";
function HomeAboutUs() {
  const policies = dataPolicy;
  const aboutUs = dataAboutUs;

  return (
    <section id="home-aboutUs">
      <div className="home-aboutUs__content container">
        <h4 className="mt-md-5">về chúng tôi</h4>
        <div className="row">
          <div className="col-md-6">
            <img
              src="http://cutuananh.devmaster.vn/images/AnhCatTC/ve-chung-toi/ve-chung-toi.jpg"
              alt="về chúng tôi"
              className="h-100 w-100"
            />
          </div>
          <div className="col-md-6">
            <p>
              nội thất <span>hoàng hoan</span>
              <br />
              uy tín song hành chất lượng
            </p>
            <p>
              Nội thất của <span>Hoàng Hoan</span> chúng tôi tự hào là đức con
              tinh thần ra đời sau hơn 30 năm hoạt động trong lĩnh vực kinh
              doanh đồ gỗ nội thất với thương hiệu ĐỒ GỖ HOÀNG HOAN nổi tiếng.
            </p>
            <p>
              Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp ĐH
              Kiên Trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy nhiệt
              huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng tôi là sở
              hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản xuất đa dạng các
              sản phẩm với giá cả luôn cạnh tranh.
            </p>
            <div className="list-img">
              <ul className="d-flex row justify-content-between align-items-center">
                {aboutUs.map((item) => {
                  return (
                    <li className="col-md-3" key={item.id}>
                      <div className="box position-relative">
                        <img
                          className=""
                          src={`http://cutuananh.devmaster.vn/${item.image}`}
                          alt="về chúng tôi 1"
                        />
                        <div className="see-more">
                          <a className="btn" href="/">
                            Xem thêm&nbsp;
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-aboutUs__content container">
        <h4 className="mt-md-5">tại sao nên chọn hoàng hoan?</h4>
        <div className="row">
          {policies.map((item, index) => {
            return (
              <div className="col-md-6">
                <div className="aboutUs-policy__item d-flex">
                  <div className="img">
                    <img
                      src={`http://cutuananh.devmaster.vn/${item.image}`}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <p className="title">{item.title}</p>
                    <p className="desc">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeAboutUs;
