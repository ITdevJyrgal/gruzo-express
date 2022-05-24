import Images from "next/image"
import Slider from "react-slick";
import ServicesData from "./servicesData";

export default function Services() {
    const settings = {
        dots: false,
        arrows: true,
        centerMode: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        variableWidth: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <section id="services">
            <div className="container">
                <div className="services-general">
                    <div className="services-general__title">
                        <h1>  Грузовые перевозки по низкой цене осуществляются в любое время дня и ночи. Организуем комфортный  переезд или быструю доставку груза по Бишкеку и Кыргызстану.</h1>
                    </div>

                    <div>
                        <Slider {...settings}>
                            {
                                ServicesData.map(el => {
                                    return (
                                        <>
                                            <div className="services-general__block" key={el.id}>
                                                <div className="services-general__block__square">
                                                    <div><Images src={el.img} alt="img"/></div>
                                                    <h1>{el.title}</h1>
                                                    <p>{el.item}</p>
                                                    <h2>{el.desc}</h2>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div>
                        <h1 className="services-general__title2">Как мы работаем</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}