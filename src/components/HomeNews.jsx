import React, { useEffect, useState } from "react";
import axios from "../api/apiXMSwaggerUI";
import { Link } from "react-router-dom";
import slugify from "../format/formatText";
function HomeNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      let respone = await axios.get("News");
      setNews(respone.data);
    };
    getAllProducts();
  }, []);

  useEffect(() => {}, [news]);
  var newData = [...news];

  return (
    <section id="home-news">
      {newData.length !== 0 && (
        <div className="home-news container">
          <h4>tin tức</h4>
          <div className="row ">
            <div className="col-md-7 home-news__effect">
              <Link to={`http://cutuananh.devmaster.vn/${news[0].title}`}>
                <div className="thumbnail box">
                  <div className="img img-main">
                    <img
                      src="http://cutuananh.devmaster.vn/images/AnhCatTC/ve-chung-toi/ve-chung-toi.jpg"
                      alt=""
                    />
                  </div>
                  <div className="main-content">
                    <p>{news[0].title}</p>
                    <p>{news[0].description}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-5">
              <div className="thumbnail">
                <div className="home-news__effect">
                  {news.splice(0, 3).map((item, index) => (
                    <div className="row fix-height" key={index}>
                      <div className="col-md-5 box">
                        <div className="img img-list">
                          <Link to={`/news/${slugify(item.title)}`}>
                            <img
                              className="home-new-img-item"
                              src="http://cutuananh.devmaster.vn/images/AnhCatTC/ve-chung-toi/ve-chung-toi.jpg"
                              alt="tin tức"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="title">
                          <a href="/tin-tuc/top-10-mau-noi-that-chung-cu-1-phong-ngu">
                            {item.title}
                          </a>
                        </p>
                        <p className="desc">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="readMore">
                  <a href="/tat-ca-tin-tuc">
                    Xem thêm
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HomeNews;
