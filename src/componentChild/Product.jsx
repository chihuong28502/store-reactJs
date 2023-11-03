import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { context } from "../context/useContext";
import axios from "../api/xm";
// import axios from "../api/apiXM";

function Product(props) {
  const { product, iconProduct } = props;
  const [postData, setPostData] = useState({});
  const { responseData, setResponseData } = useContext(context);
  const postOrDeleteDataToAPI = async (product) => {
    if (iconProduct === "fa-regular fa-heart") {
      try {
        // Thực hiện yêu cầu POST
        let response = await axios.post("wishlistStoreClosething", product);
        toast.success("thêm sản phẩm thành công");
        // Lưu trạng thái POST thành côn
        setPostData(response.data);
      } catch (error) {
        // Xử lý lỗi POST
        toast.error("Sản phẩm đã tồn tại trong danh mục yêu thích");
      }
    } else {
      axios
        .delete(`/wishlistStoreClosething/${product.id}`)
        .then((response) => {
          toast.success("Xóa thành công");
          localStorage.removeItem("wishlistItems", product);
          // Cập nhật danh sách đối tượng sau khi xóa
          const updatedObjects = responseData.filter(
            (obj) => obj.id !== product.id
          );
          setResponseData(updatedObjects);
          // Đặt giá trị deletedObjectId để thông báo xóa thành công (nếu cần)
        })
        .catch((error) => {
          toast.error("Xóa khong thành công:");
        });
    }
  };
  const handleClickAddWishList = (product) => {
    postOrDeleteDataToAPI(product);
  };
  const fetchDataFromAPI = async () => {
    try {
      // Thực hiện yêu cầu GET hoặc loại yêu cầu khác
      const response = await axios.get("wishlistStoreClosething");
      // Lưu dữ liệu trả về từ yêu cầu GET
      setResponseData(response.data);
    } catch (error) {
      // Xử lý lỗi GET hoặc loại yêu cầu khác
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    if (postData) {
      fetchDataFromAPI();
    }
  }, [postData]);
  localStorage.setItem("wishlistItems", JSON.stringify(responseData));
  return (
    <div className="col-md-3">
      <div className="product-card">
        <img
          src={product.image}
          alt="san pham"
          className="product-card__image w-100 h-75"
        />
        <div className="product-card__content">
          <span className="title">
            {product?.title}
            <br />
          </span>
          <span
            style={{
              display: "inline-block",
              direction: "ltr",
              touchAction: "none",
            }}
          >
            <span
              className="react-simple-star-rating"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                userSelect: "none",
              }}
            >
              <span
                className="empty-icons"
                style={{
                  display: "inline-block",
                  color: "rgb(204, 204, 204)",
                }}
              >
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
              </span>
              <span
                className="filled-icons"
                title="1 out of 5"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "rgb(189, 148, 95)",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  width: "0%",
                }}
              >
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="star-svg"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    strokeMiterlimit={10}
                    strokeWidth={0}
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                  ></path>
                </svg>
              </span>
            </span>
          </span>
          <br />
          <span className="new-price">
            {Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "USD",
            }).format(product?.price)}
          </span>
        </div>
        <div className="product-card__group-btn">
          <a href="/san-pham/phong-khach/ban-uong-nuoc">
            <button className="btn">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </a>
          <button
            onClick={() => handleClickAddWishList(product)}
            className="btn"
            type="button"
            id="liveToastBtn"
          >
            <i className={iconProduct}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
