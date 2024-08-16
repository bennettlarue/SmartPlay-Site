import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MachineLink from "./MachineLink";

const MachineCarousel = ({ data }) => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {data.map(({ imageLink, title, desc }, index) => (
                    <div key={index} className="">
                        <MachineLink
                            index={index}
                            imageLink={imageLink}
                            title={title}
                            desc={desc}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MachineCarousel;
