import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import Faq from "../pages/Page/Faq";
import Appointment from "../pages/Page/Appointment";
import OurProjects from "../pages/Page/OurProjects";
import ProjectDetails from "../pages/Page/ProjectDetails";
import Privacy from "../pages/privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import PEMFuelcell from "../pages/products/PEMFuelcell";
import RedoxFlowCell from "../pages/products/RedoxFlowCell";
import FCTS from "../pages/products/FCTS";


const routes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/products" element={<OurProjects />} />
                <Route path="/product-details" element={<ProjectDetails />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/pem-fuel-cell' element={<PEMFuelcell />} />
                <Route path='/redox-flow' element={<RedoxFlowCell />} />
                <Route path='/fcts' element={<FCTS />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes