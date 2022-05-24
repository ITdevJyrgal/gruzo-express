import one from "./../../assets/img/dos.png";
// import two from "./../../assets/img/let.png";
// import tre from "./../../assets/img/mes.png";
// import fo from "./../../assets/img/sab.png";
import advanData from "./advanData"
import Image from "next/image";


export default function Advan() {
    return (
        <section className="advan">
            <div className="container">
                <div className="advan-general">
                    <h1 className="advan-general__title">Почему нужно выбрать нас?</h1>
                    <div className="advan-general__block">
                        {
                            advanData.map(el => {
                                return (
                                    <div className="advan-general__square" key={el.id}>
                                        <Image src={el.img} alt="img"/>
                                        <p>{el.item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}