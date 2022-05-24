import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import Link from "next/link"

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    function showSideMenu() {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className="navbar">
                <div to="#" className="menu-bars" onClick={showSideMenu}>
                    <FaIcons.FaBars className="menu-icon"/>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">

                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/"}>
                                <a>
                                    Домой
                                </a>
                            </Link>

                        </li>

                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/rates"}>
                                <a>
                                    Тарифы
                                </a>
                            </Link>

                        </li>
                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/#services"}>
                                <a>
                                    Услуги
                                </a>
                            </Link>
                        </li>
                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/#description"}>
                                <a>
                                    Контакты
                                </a>
                            </Link>
                        </li>

                        <div>
                            <div className="burger-general__square">
                                <a href="#">  <i className="fab fa-telegram"/></a>
                                <a href="#"> <i className="fab fa-whatsapp"/></a>
                                <a href="tel:">0770-70-70-70</a>
                            </div>
                            <div className="burger-general__square">
                                <a href="#"> <i className="fab fa-telegram"/></a>
                                <a href="#">  <i className="fab fa-whatsapp"/></a>
                                <a href="tel:">0770-70-70-70</a>
                            </div>
                        </div>
                    </ul>

                </nav>
            </div>
        </>
    );
}

export default Navbar;
