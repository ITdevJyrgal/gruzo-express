import Image from "next/image"
import na from "./../../assets/img/na.png"
import cha from "./../../assets/img/cha.png"
import ch from "./../../assets/img/width.png"
import phone from "./../../assets/img/phone.png"
import pors from "./../../assets/img/pors.png"
import ruk from "./../../assets/img/ruk.png"
import width2 from "./../../assets/img/width2.png"

export default function Work() {
    return (
        <section className="work">
            <div className="container">
                <div className="work-general">
                    <div className="work-general__square">
                        <div className="work-general__block">
                            <h1>Заявка на сайте</h1>
                            <p>Вы оставаляете заявку на
                                заказ на нашем сайте</p>
                        </div>
                        <div>
                            <Image src={na} alt="img"/>
                        </div>
                        <div className="work-general__block">
                            <h1>Выезд</h1>
                            <p>После уточнения, мы приезжаем точно в адрес и в точное время</p>
                        </div>

                        <div>
                            <Image src={cha} alt="img"/>
                        </div>
                        <div className="work-general__block">
                            <h1>Получение</h1>
                            <p>Вы принимаете груз и получаете скидку на следующую перевозку</p>
                        </div>
                    </div>
                    <div className="work-general__width">
                        {/*<div/>*/}
                        {/*<div/>*/}
                        {/*<div/>*/}
                        {/*<div/>*/}
                        {/*<div/>*/}
                        <span className="work-general__width__img"><Image src={ch} alt="img"/></span>
                        <span className="work-general__width__img2"><Image src={width2} alt="img"/></span>
                    </div>
                    <div className="work-general__square2">
                        <div>
                            <Image src={phone} alt="img"/>
                        </div>
                        <div className="work-general__block2">
                            <h1>Уточнение</h1>
                            <p>Наш менеджер перезвонит
                                вам, уточнит детали заказа</p>
                        </div>
                        <div>
                            <Image src={pors} alt="img"/>
                        </div>
                        <div className="work-general__block2">
                            <h1>Доставка</h1>
                            <p>Доставляем груз точно в срок</p>
                        </div>
                        <div>
                            <Image src={ruk} alt="img"/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}