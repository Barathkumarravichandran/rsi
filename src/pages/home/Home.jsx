import Banner1 from "../../Components/Banner1";
import Navbar from "../../layout/Navbar";
import heart_pulse_orange2 from '../../assets/images/heart-pulse-rate-orange-2.svg';
import img_year from '../../assets/images/banner/image-year.png';
import heart_pulse_orange from '../../assets/images/heart-pulse-rate-orange.svg';
import Featureses from "../../Components/Featureses";
import service_icon1 from '../../assets/images/service/service_icon1.png';
import service_icon2 from '../../assets/images/service/service_icon2.png';
import service_icon3 from '../../assets/images/service/service_icon3.png';
import service_icon4 from '../../assets/images/service/service_icon4.png';
import service_icon5 from '../../assets/images/service/service_icon5.png';
import Features from "../../Components/Features";
import heart_pulse_rate_orange_2 from '../../assets/images/heart-pulse-rate-orange-2.svg';
import heart_pulse_rate_orange from '../../assets/images/heart-pulse-rate-orange.svg';
import featured_thumb_1 from '../../assets/images/featured/featured-thumb-1.png';
import features_icon_1 from '../../assets/images/featured/features-icon-1.png';
import featured_thumb_2 from '../../assets/images/featured/featured-thumb-2.png';
import features_icon_2 from '../../assets/images/featured/features-icon-2.png';
import featured_thumb_3 from '../../assets/images/featured/featured-thumb-3.png';
import features_icon_3 from '../../assets/images/featured/features-icon-3.png';
import About from "../../Components/About";
import about_img from '../../assets/images/about/about-img.png';
import about_shape from '../../assets/images/about/about-shape.png';
import Brand from "../../Components/Brand";
import partner1 from '../../assets/images/rsi/client/client-1.png';
import partner2 from '../../assets/images/rsi/client/client-2.png';
import partner3 from '../../assets/images/rsi/client/client-3.png';
import partner4 from '../../assets/images/rsi/client/client-4.png';
import partner5 from '../../assets/images/rsi/client/client-5.png';
import Project from "../../Components/Project";
import project_1 from '../../assets/images/rsi/products/fuelcell.webp';
import project_2 from '../../assets/images/rsi/products/RFB Teststation.webp';
import project_3 from '../../assets/images/rsi/products/ETS.webp'
import WhyChoose from "../../Components/whyChoose";
import chose_right_left from '../../assets/images/why-choose/chose-right-left.jpg';
import chose_right_right from '../../assets/images/why-choose/chose-right-right.jpg';
import chose_right_bottom from '../../assets/images/why-choose/chose-right-bottom.png';
import counter_icon_1 from '../../assets/images/counter/counter-icon-1.svg'
import counter_icon_2 from '../../assets/images/counter/counter-icon-2.svg'
import counter_icon_3 from '../../assets/images/counter/counter-icon-3.svg'
import counter_icon_4 from '../../assets/images/counter/counter-icon-4.svg'
import NewsLetter from "../../Components/NewsLetter";
import close_ico_yeloow_grad from '../../assets/images/newsletter/close-ico-yeloow-grad.svg'
import circle_white from '../../assets/images/newsletter/circle-white.svg'
import Faq from "../../Components/Faq";
import faq_left_img from '../../assets/images/faq/faq-left-img.png';
import couple_ball_layer from '../../assets/images/faq/couple-ball-layer.svg';
import testimonial_left_img from '../../assets/images/testimonial/testimonial-left-img.jpg';
import quote_orange from '../../assets/images/testimonial/quote_orange.svg';
import testi1 from '../../assets/images/testimonial/testi1.jpg';
import testimonial_brsnd_2 from '../../assets/images/testimonial/testimonial-brsnd-2.png';
import testi2 from '../../assets/images/testimonial/testi2.jpg';
import testi3 from '../../assets/images/testimonial/testi3.jpg';
import testi5 from '../../assets/images/testimonial/testi5.jpg';
import testi4 from '../../assets/images/testimonial/testi4.jpg';
import Footer from "../../layout/Footer";
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import Testimonial from "../../Components/Testimonial";
import Home1and2Counter from "../../Components/Home1and2Counter";

const Home = () => {

  return (
    <>
      <Navbar
        layout={'rs-header-layout2'}
        firstLvlMenu='home'
        secondLvlMenu='multipage'
      />
      <Banner1
        heart_pulse_orange2={heart_pulse_orange2}
        img_year={img_year}
        heart_pulse_orange={heart_pulse_orange}
      />
      <Featureses
        service_icon1={service_icon1}
        service_icon2={service_icon2}
        service_icon3={service_icon3}
        service_icon4={service_icon4}
      />
      <Project
        heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
        heart_pulse_rate_orange={heart_pulse_rate_orange}
        project_1={project_1}
        project_2={project_2}
        project_3={project_3}
        addclass='md-pb-80'
      />
      <About
        about_img={about_img}
        about_shape={about_shape}
        heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
        heart_pulse_rate_orange={heart_pulse_rate_orange}
      />
      <Brand
        heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
        heart_pulse_rate_orange={heart_pulse_rate_orange}
        partner1={partner1}
        partner2={partner2}
        partner3={partner3}
        partner4={partner4}
        partner5={partner5}
      />

      <WhyChoose
        heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
        heart_pulse_rate_orange={heart_pulse_rate_orange}
        chose_right_left={chose_right_left}
        chose_right_right={chose_right_right}
        chose_right_bottom={chose_right_bottom}
      />
      <Home1and2Counter
        counter_icon_1={counter_icon_1}
        counter_icon_2={counter_icon_2}
        counter_icon_3={counter_icon_3}
        counter_icon_4={counter_icon_4}
        showSecTitle={true}
      />
      <NewsLetter
        close_ico_yeloow_grad={close_ico_yeloow_grad}
        circle_white={circle_white}
      />

      <Faq
        heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
        heart_pulse_rate_orange={heart_pulse_rate_orange}
        faq_left_img={faq_left_img}
        couple_ball_layer={couple_ball_layer}
        addClass={'mb-40'}
        activeItem={0}
        itemsArray={[0, 1, 2]}

      />
      <Testimonial
        heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
        heart_pulse_rate_orange={heart_pulse_rate_orange}
        quote_orange={quote_orange}
        testi1={testi1}
        testi2={testi2}
        testi3={testi3}
        testi4={testi4}
        testi5={testi5}
        testimonial_left_img={testimonial_left_img}
        testimonial_brsnd_2={testimonial_brsnd_2}
      />
      
      <Footer
        info_3={info_3}
        info_1={info_1}
        info_2={info_2}
      />
    </>
  )
}

export default Home