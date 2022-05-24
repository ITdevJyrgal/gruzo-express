import motion from "./../../assets/img/motion.png"
import Image from "next/image"
import logo from "./../../assets/img/logo.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-general">
                    <div className="footer-general__contact">
                        <a href="#">Услуги</a>
                        <a href="#">Контакты</a>
                        <a href="#">Тарифы</a>
                    </div>
                    <div className="footer-general__logo">
                        <Image src={logo} alt="img"/>
                    </div>
                    <div className="footer-general__contact">
                        <a href="tel:" className="footer-general__tel" >0707-70-70-70</a>
                        <a href="tel:" className="footer-general__tel" >0707-70-70-70</a>
                    </div>

                </div>
                <div className="footer-general__width"/>
                <div className="footer-general2">
                    <div className="footer-general2__motion">
                        <h1>Все права защищены - 2022</h1>
                    </div>
                    <a href="https://www.motion-web.io/" >
                        <div className="footer-general2__motion2">

                   <span>
                         <Image src={motion} alt="img"/>
                   </span>
                            <h1>Студия Motion Web</h1>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}