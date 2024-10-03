import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Box from '@mui/system/Box';
import Slider from "react-slick";
import austria from "./Images/austria.jpg";
import Argentina from './Images/Argentina.avif';
import Jaipur from './Images/jaipur.avif';
import Moscow from './Images/Moscow.avif';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Populartours() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1084,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="tour-list">

      
      <h3 style={{ textAlign: 'center', fontFamily: 'DM Serif Display', lineHeight: '2', fontSize: '3rem', fontWeight: '400' }}>
        Popular <span style={{ color: '#5C98F2', fontFamily: 'DM Serif Display' }}>Tours</span>
      </h3>

      <div style={{ padding: '40px', height: '512px' }}>
        <div className="slider-container" style={{ maxHeight: '512px', paddingLeft: '30px' }}>
          <Slider {...settings}>
            {[
              { img: austria, title: "Austria - 6 Days in Vienna, Hallstatt", duration: "2 Days 1 Night", reviews: 189, originalPrice: 2600, discountPrice: 2100 },
              { img: Argentina, title: "Argentina - Great Diving Trip", duration: "4 Days 6 Night", reviews: 263, originalPrice: null, discountPrice: 1200 },
              { img: Jaipur, title: "India - 8 Days in Rajasthan, Jaipur", duration: "8 Days 7 Night", reviews: 78, originalPrice: 2100, discountPrice: 1300 },
              { img: Moscow, title: "Two Moscow Tour of 7 days", duration: "8 Days 7 Night", reviews: 426, originalPrice: 3800, discountPrice: 3300 }
            ].map((tour, index) => (
              <div className='p-tours' key={index}>
                <div className="p-tours-img">
                  <img className='carousel-img' src={tour.img} alt={tour.title} />
                </div>
                <div className="p-tours-body">
                  <div className="p-tour-heading">
                    <a href='#' style={{ fontFamily: 'DM Serif Display', color: 'white', fontSize: '27px', fontWeight: '500', textDecoration: 'none' }}>
                      {tour.title}
                    </a>
                  </div>
                  <div className="p-tour-info">
                    <div className="p-tour-review">
                      {tour.duration}
                      <div className="stars" style={{ marginTop: '6px' }}>
                        {Array(5).fill(<i className="fa-solid fa-star" style={{ color: '#FFD43B', fontSize: '13px' }}></i>)}
                        <span>({tour.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="price">
                      {tour.originalPrice && (
                        <div className="original-price">
                          <span><del>${tour.originalPrice}</del></span>
                        </div>
                      )}
                      <div className="discount-price" style={{ marginTop: "6px" }}>
                        <span>${tour.discountPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Box className='anch-link' sx={{ textAlign: 'center', marginTop: '100px' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#343434', borderBottom: '2px solid #d1d1d1', borderWidth: '0px 0px 2px 0px', padding: '0 0 5px 0', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '16px' }}>
          All Destinations <FaArrowRightLong color='#afafaf' />
        </a>
      </Box>

      <h3 style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'DM Serif Display', lineHeight: '2', fontSize: '3rem', fontWeight: '400' }}>
        Freshly <span style={{ color: '#5C98F2', fontFamily: 'DM Serif Display' }}>Added</span>
      </h3>
      </div>
    </>
  );
}

export default Populartours;
