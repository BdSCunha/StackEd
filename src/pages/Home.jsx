import { Navbar } from '../components/Navbar.jsx'
import { CourseCatalog } from '../components/CourseCatalog.jsx'
import { Footer } from '../components/Footer.jsx'

export const Home = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <CourseCatalog />
            <Footer />
        </div>
    )
}
