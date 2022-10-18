import React, { useState } from "react";
import cardData from "./cardData.json";
import "../App.css";
import ClientReview from "./ClientReview";

const Card = () => {
  const [dataList, setDataList] = useState(cardData);

  console.log(dataList.productList);
  return (
    <>
      <div className="card_data">
        {dataList.data.map((element) => (
          <div className="card_details paddingCard" key={element.id}>
            <h1 className="title">{element.title}</h1>
            <h1 className="price">$ {element.price}</h1>
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
          </div>
        ))}
      </div>

      <div className="card_title">
        <h1>Some Proposals</h1>
      </div>
      <div className="card_data">
        {dataList.productList.map((element) => (
          <div className="card_details imgCard" key={element.id}>
          <img className="card_imgs" src={element.img_products} alt="imgs" />
            <div className="product_content">
            <h1 className="title">{element.title_products}</h1>
            <h1 className="price">$ {element.prict_products}</h1>
            </div>
            <p>{element.des_products}</p>
          </div>
        ))}
      </div>
      <div className="card_data">
        {dataList.productList.map((element) => (
          <div className="card_details imgCard" key={element.id}>
          <img className="card_imgs" src={element.img_products} alt="imgs" />
            <div className="product_content">
            <h1 className="title">{element.title_products}</h1>
            <h1 className="price">$ {element.prict_products}</h1>
            </div>
            <p>{element.des_products}</p>
          </div>
        ))}
      </div>

      
      <div className="card_title">
        <h1>Your Client Review</h1>
      </div>
      <ClientReview />
    </>
  );
};

export default Card;
