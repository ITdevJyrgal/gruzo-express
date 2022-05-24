import Link from "next/link"
import Burgermenu from "./burgermenu";
import Image from "next/image";
import logo from "./../../assets/img/logo.png"

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-general">
                    <div>
                        <Link href="/">
                            <a>
                              <Image src={logo} alt="img" />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/rates">
                            <a className="header-general__nav">Тарифы</a>
                        </Link>
                        <Link href="/#services">
                            <a className="header-general__nav">Услуги</a>
                        </Link>
                        <Link href="/#description">
                            <a className="header-general__nav">Контакты</a>
                        </Link>
                    </div>

                    <Burgermenu/>
                </div>
            </div>
        </header>
    )
}