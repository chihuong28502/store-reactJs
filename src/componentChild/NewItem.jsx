import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import slugifyText from "../format/formatText";
import axios from "../api/apiXMSwaggerUI";
import "../css/news-newItem.css";

function NewItem() {
  const { NewItem } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllNews = async () => {
      let respone = await axios.get("News");
      setData(respone.data.filter((x) => slugifyText(x.title) == NewItem));
    };
    getAllNews();
  }, []);
  useEffect(() => {}, [data]);
  console.log(data);
  return (
    <>
      <Header />
      {data.map((item) => {
        return (
          <div className="box-content all-news">
            <div className="box-news__content news_detail container">
              <h4>{item.title}</h4>
              <img
                src="http://cutuananh.devmaster.vn/images/AnhCatTC/ve-chung-toi/ve-chung-toi.jpg"
                alt=""
                className="news-detail__image"
              />
              <p className="news-detail__desc">{item.description}</p>
            </div>
          </div>
        );
      })}

      <Footer />
    </>
  );
}

export default NewItem;
