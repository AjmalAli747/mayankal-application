import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import cardData from "./cardData.json";
import "../App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ClientReview = () => {
    const [ClientReviewData, setClientReviewData] = useState(cardData);

    console.log(ClientReviewData.clientReview);
  return (
    <>
     <div className="footer">
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
   

        {
            ClientReviewData.clientReview.map(element => 
                <SwiperSlide key={element.id}>
          <div className="slider" >
            <div className="slider_content">
              <div className="slider_imgs">
                <img
                  src={element.clientReview_img}
                  alt=""
                />
                <div className="content_text">
                  <p>{element.clientReview_name}</p>
                  <div className="rating">
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                  </div>
                </div>
              </div>
              <div className="engment_content">
                <div className="conten_section">
                  <h1>{element.clientReview_Engagement}</h1>
                  <div className="rating">
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                  </div>
                </div>
                <div className="conten_section">
                <h1>{element.clientReview_Engagement}</h1>
                  <div className="rating">
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                  </div>
                </div>
                <div className="conten_section">
                <h1>{element.clientReview_Engagement}</h1>
                  <div className="rating">
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-solid fa-star start_full"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                    <i className="fa-regular fa-star start_hulf"></i>
                  </div>
                </div>
                <div className="dis_text">
                  <p>
                   {
                    element.p_content
                   }
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
            )
        }
      </Swiper>

      <div className="custom-shape-divider-top-1666078666">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
     </div>
    </>
  );
};

export default ClientReview;
