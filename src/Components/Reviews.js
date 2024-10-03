import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';
import Earth from './Images/globe.png'
import Price from './Images/best-price.png'
import Support from './Images/live-chat.png'

function Reviews() {

    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s",
            text: "New York",
            paragraph: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        },
        {
            name: "Brittany Clark",
            rating: 5,
            image: "https://img.freepik.com/premium-photo/quality-business-photo-professional-use_943898-14593.jpg?w=740",
            text: "San Francisco",
            paragraph: "My visit to Santorini was a dream come true. The island’s breathtaking sunsets over the caldera were nothing short of magical, painting the sky in hues of orange and pink. Exploring the charming villages of Oia and Fira."
        },
        {
            name: "Vincenzo Bellini",
            rating: 5,
            image: "https://img.freepik.com/premium-photo/quality-business-photo-professional-use_943898-14751.jpg?w=740",
            text: "Palermo",
            paragraph: "I recently visited the stunning coastal town of Cinque Terre, and it was an unforgettable experience. The vibrant, colorful houses perched on the cliffs create a picturesque backdrop against the azure sea."
        },
        {
            name: "Yuki Nakamura",
            rating: 5,
            image: "https://img.freepik.com/premium-photo/woman-red-shirt-stands-sidewalk-front-red-building_1204564-155842.jpg?w=740",
            text: "Tokyo",
            paragraph: "I recently explored the enchanting city of Kyoto, Japan, and it was a captivating journey through history and culture. The serene temples, like Kinkaku-ji with its shimmering gold leaf, left me in awe."
        },
        {
            name: "Hyun-woo Choi",
            rating: 5,
            image: "https://img.freepik.com/premium-photo/man-with-white-sweater-that-says-he-is-smiling_1275506-2017.jpg?w=740",
            text: "Seol",
            paragraph: "I recently visited the vibrant city of Marrakech, Morocco, and it was a sensory feast. The bustling souks were a whirlwind of colors, sounds, and scents, with artisans showcasing their intricate crafts and spices filling the air with exotic aromas."
        },
        {
            name: "Giovanni Falcone",
            rating: 5,
            image: "https://img.freepik.com/premium-photo/woman-suit-with-her-arms-crossed_1029679-109694.jpg?w=740",
            text: "Amsterdam",
            paragraph: "I recently explored the enchanting city of Lisbon, Portugal, and it was a delightful experience filled with charm and character. The colorful neighborhoods of Alfama and Bairro Alto, with their narrow cobblestone streets and azulejos,felt like stepping back in time"
        }
    ];

    const items = [
        {
            image: Earth,
            heading: "700 Destinations",
            paragraph: "Our expert team handpicked all destinations in this site.",
        },
        {
            image: Price,
            heading: "Best Price Gurantee",
            paragraph: "Price match within 48 hours of order confirmation.",
        },
        {
            image: Support,
            heading: "Top Notch Support",
            paragraph: "We are here to help, before, during, and even after your trip.",
        },
    ];

    return (
        <>
            <div className="customer-rating">
                <div className="rating-heading">
                    <h1 style={{ fontFamily: 'DM Serif Display', fontWeight: '400', fontSize: '50px', color: '#12022f', textAlign: 'center', lineHeight: '1.2', padding: '70px 0 50px 0' }}>
                        What our customers are <br /> saying about us
                    </h1>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="review-card">
                                <img src={review.image} alt={`${review.name}'s profile`} className="avatar" />
                                <div className="review-content">
                                    <div className="reviewer-info" style={{ display: 'flex', alignItems: 'center', gap:'15px' }}>
                                        <h3 className="reviewer-name">{review.name}</h3>
                                        <span className="stars" style={{ marginLeft: '10px' }}>
                                            {[...Array(review.rating)].map((_, i) => (
                                                <img key={i} src="https://t3.ftcdn.net/jpg/07/66/21/46/360_F_766214677_JwIobM8dgiytiMaVUcrf37A92MXhXfK4.jpg" alt="star" className="star" style={{ margin: '0 0px' }}  />
                                            ))}
                                        </span>
                                    </div>
                                    <p className="review-text" >{review.text}</p>
                                    <p className="review-paragraph">{review.paragraph}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            <div className="section">
                {items.map((item, index) => (
                    <div className="column" key={index}>
                        <img src={item.image} alt="Section" className="column-image" />
                        <div className="column-body">
                            <h3 className="column-heading">{item.heading}</h3>
                            <p className="column-paragraph">{item.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Reviews
