import React, { useEffect, useState } from "react";
import "../css/news-style.css";
import axios from "../api/apiXMSwaggerUI";
import { Link } from "react-router-dom";
import slugify from "../format/formatText";

function News() {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const getAllListNews = async () => {
      let respone = await axios.get("News");
      setListNews(respone.data);
    };
    getAllListNews();
  }, []);
  useEffect(() => {}, [listNews]);
  var newData = [...listNews];
  console.log(newData);
  // .sort((a, b) => b.create_date - a.create_date);
  return (
    <div className="wrapper">
      <div className="box-news container">
        <div id="map-link-bar">
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/tin-tuc">Tin tức</a>
            </li>
          </ul>
        </div>
        <div className="box-news__content">
          {newData.length !== 0 && (
            <div className="row">
              <div className="col-md-7 content-left">
                <Link to={`/news/${slugify(newData[0].title)}`}>
                  <div className="thumbnail">
                    <p className="content-left__title">{newData[0].title}</p>
                    <p>{newData[0].description}</p>
                    <img
                      src="http://cutuananh.devmaster.vn/images/news/05.jpg"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="col-md-5 content-right">
                <div className="thumbnail">
                  <div className="row ">
                    <div className="col-md-12">
                      <h4>bài viết mới</h4>
                    </div>
                  </div>
                  {newData.slice(1, 4).map((item) => (
                    <div className="row fix-height" key={item.id}>
                      <div className="col-md-5">
                        <Link to={`/news/${slugify(item.title)}`}>
                          <img
                            src="http://cutuananh.devmaster.vn/images/news/05.jpg"
                            alt="tin tức"
                          />
                        </Link>
                      </div>
                      <div className="col-md-7">
                        <p className="content-right__title">
                          <a href="/">{item.title}</a>
                        </p>
                        <p>
                          <i className="fa-regular fa-clock"></i>&nbsp;
                          {new Date(item.createdDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* <div className="row">
            <div className="col-md-7 content-left">
              <a href="/tin-tuc/top-10-mau-noi-that-chung-cu-1-phong-ngu">
                <div className="thumbnail">
                  <p className="content-left__title">{listNews[0].title}</p>
                  <p>{listNews[0].description}</p>
                  <img
                    src="http://cutuananh.devmaster.vn/images/news/05.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="col-md-5 content-right">
              <div className="thumbnail">
                <div className="row ">
                  <div className="col-md-12">
                    <h4>bài viết mới</h4>
                  </div>
                </div>
                {listNews.splice(1, 1).map((item) => {
                  return (
                    <div className="row fix-height" key={item.id}>
                      <div className="col-md-5">
                        <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                          <img
                            src="http://cutuananh.devmaster.vn/images/news/05.jpg"
                            alt="tin tức"
                          />
                        </a>
                      </div>
                      <div className="col-md-7">
                        <p className="content-right__title">
                          <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                            {item.title}
                          </a>
                        </p>
                        <p>
                          <i className="fa-regular fa-clock" />
                          &nbsp;8/9/2022
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="row fix-height">
                  <div className="col-md-5">
                    <a href="/tin-tuc/cach-chon-sofa-cho-phong-khach-them-sang-trong">
                      <img
                        src="http://cutuananh.devmaster.vn/images/news/05.jpg"
                        alt="tin tức"
                      />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <p className="content-right__title">
                      <a href="/tin-tuc/cach-chon-sofa-cho-phong-khach-them-sang-trong">
                        Cách chọn Sofa cho phòng khách thêm sang trọng
                      </a>
                    </p>
                    <p>
                      <i className="fa-regular fa-clock" />
                      &nbsp;9/8/2022
                    </p>
                  </div>
                </div>
                <div className="row fix-height">
                  <div className="col-md-5">
                    <a href="/tin-tuc/25-mau-giuong-ngu-hoc-keo-cho-phong-nho">
                      <img
                        src="http://cutuananh.devmaster.vn/images/news/05.jpg"
                        alt="tin tức"
                      />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <p className="content-right__title">
                      <a href="/tin-tuc/25-mau-giuong-ngu-hoc-keo-cho-phong-nho">
                        25+ Mẫu giường ngủ hộc kéo cho phòng nhỏ
                      </a>
                    </p>
                    <p>
                      <i className="fa-regular fa-clock" />
                      &nbsp;27/4/2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default News;
