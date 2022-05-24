import Header from "./../components/Header/header"
import Footer from "./../components/Footer/footer"

export default function Homelayuot({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}