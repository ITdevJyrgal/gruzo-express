import sprinter from "./../../assets/img/sprinter.png"
import Image from "next/image"
import bg from "./../../assets/img/bg2.png"
import Link from "next/link"
import what from "./../../assets/img/whats.svg"
// import React from "@types/react"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-img">
                <Image src={bg} alt="img"/>
            </div>
            <div className="container">
                <div className="hero-general">
                    <div>
                        <span>
                            <h1 className="hero-general__title">Переезжаете?</h1>
                        <p className="hero-general__desc">ТОГДА С НАС ТРАНСПОРТ С ОПЫТНЫМ ВОДИТЕЛЕМ И ПОМОШНИКИ В ГОРОДЕ
                            БИШКЕК</p>
                        </span>
                        <div>

                        <div className="hero-general__square">
                            <a href="tel:">0707-70-70-70</a>
                            <a href="#"> <i className="fab fa-telegram"/></a>
                            <a href="#"> <i className="fab fa-whatsapp"/></a>
                        </div>
                        <div className="hero-general__square">
                            <a href="tel:">0707-70-70-70</a>
                            <a href="#"> <i className="fab fa-telegram"/></a>
                            <a href="#"> <i className="fab fa-whatsapp"/></a>
                        </div>
                    </div>
                    <div className="hero-general__btn__gen">

                        <Link href="#form"><a>
                            <button className="hero-general__btn">Вызвать</button>
                        </a></Link>

                    </div>
                </div>
                <div>
                    <div className="hero-general__img">
                        <Image src={sprinter} alt="img"/>
                    </div>
                    <div className="hero-general__what">
                        <a href="#"> <Image src={what} alt="img"/></a>
                    </div>
                </div>
                <div className="hero-general__mobile">
                    <div>
                        <a href="#"><i className="fa-solid fa-square-phone"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <button>Вызвать</button>
                </div>
            </div>
        </div>
</section>
)
}