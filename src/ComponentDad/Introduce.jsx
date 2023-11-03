import React from "react";
import "../css/introduce.css";
import missionData from "../data/dataMission";
function Introduce() {
  const mission = missionData;

  return (
    <div className="box-content">
      <div className="container">
        <div className="banner-page">
          <div className="banner-page__image">
            <img
              src="http://cutuananh.devmaster.vn/images/AnhCatTC/thanhlap.jpg"
              alt=""
            />
          </div>
          <div className="banner-page__title">
            <img
              src="http://cutuananh.devmaster.vn/images/AnhCatTC/thanhlap.jpg"
              alt=""
            />
            <p>GIỚI THIỆU</p>
          </div>
        </div>
        <div className="wrapper-box  box-about">
          <h4>thành lập &amp; phát triển</h4>
          <div className="row about-history mt-3">
            <div className="col-md-6">
              <img
                src="http://cutuananh.devmaster.vn/images/AnhCatTC/thanhlap.jpg"
                alt="thanh lap"
                className="h-100 w-100"
              />
            </div>
            <div className="col-md-6">
              <p>
                Nội thấy Hoàng Hoan được xây dựng dựa trên tình yêu, đam mê của
                tôi đối với nghề mộc và Khao khát mang những sản phẩm nội thất
                đẹp của mình đến với khách hàng thân yêu.
              </p>
              <p>
                Cả một quá trình từ 1 người thợ phụ rồi được làm thợ mộc chính,
                tự tạo ra cho mình 1 phân xưởng nhỏ rồi dần phát triển và hiện
                tại Hoàng Hoan đã là một trong những công ty có dịch vụ thiết kế
                và thi công nội thất uy tín chất lượng với giá tốt nhất tại Hà
                Nội với sứ mệnh “đem đến cho khách hàng không gian nội thất hòan
                hảo”.
              </p>
              <p>
                Hoàng Hoan luôn nỗ lực để tạo ra không gian đẹp đẹp cho khách
                hàng theo nhiều gam màu sắc khác nhau và phong cách đa dạng theo
                đúng ở sở thích, lứa tuổi và phong thủy của khách hàng.
              </p>
            </div>
          </div>
          <div className="row about-vision">
            <div className="col-md-12">
              <h4 className="my-5">tầm nhìn</h4>
              <img
                src="http://cutuananh.devmaster.vn/images/AnhCatTC/tamnhin.jpg"
                alt=""
                className="w-100"
              />
              <p>
                Chúng tôi luôn hướng đến việc tạo ra các sản phẩm nội thất chất
                trên triết lý tôn trọng và giữ gìn những gì tự nhiên đã ban tặng
                cho con người. Chúng tôi luôn tìm tòi và ứng dụng các giải pháp
                sản phẩm và công nghệ tiên tiến nhất, hợp tác với các đối tác
                công nghệ hàng đầu thế giới, tìm kiếm và phát triển các vùng
                nguyên liệu tự nhiên được thiên nhiên chọn lọc, ưu đãi trong
                nước lẫn nước ngoài, tất cả nhằm tạo ra các sản phẩm nội thất tự
                nhiên gần gũi cho người khách hàng Việt Nam.
              </p>
            </div>
          </div>
          <h4 className="mt-3">sứ mệnh</h4>
          <div className="row about-policy mt-2">
            {mission.map((item, index) => {
              return (
                <div className="col-md-6 my-3 " key={index}>
                  <div className="thumbnail">
                    <img
                      src={`http://cutuananh.devmaster.vn/${item.image}`}
                      alt=""
                      className="image"
                    />
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
      </div>
    </div>
  );
}

export default Introduce;
