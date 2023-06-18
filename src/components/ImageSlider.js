import React, { useState } from "react";

import "../style/ImageSliderstyle.css";


export default function ImageSlider ({ data }){
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
            <div className="arrow arrow-left" onClick={prevSlide}>
                ❰
            </div>
            {data.map((item, idx) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                );
            })};

            <div className="arrow arrow-right" onClick={nextSlide}>
                ❱
            </div>
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })};
            </span>
        </div>
    );
};