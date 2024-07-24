import React from 'react'
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';

const Terms = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
            />
            <Common_Banner pageName={'Terms and Conditions'} />
            <div className="container rs-about rs-about-page pb-120 pt-120">
                <div className="col-md-12">
                    <div className="rs-about__box">
                        <h2 className="title split-in-fade">Terms &amp; Conditions.</h2>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis mi augue. Nunc non ex sem. Etiam eros nisi, sagittis vitae varius nec, varius vitae dolor. Fusce rhoncus metus sed semper placerat. Vestibulum auctor, libero non interdum consequat, lectus mauris ultrices metus, id rhoncus diam nulla ac nulla.</p>
                        <p className='mt-4'>Proin eleifend mauris placerat blandit vulputate. Nulla vehicula dui eget porttitor pellentesque. Integer sit amet nisl pulvinar, ultrices augue eget, tempor elit. Nam at sapien ac lorem rhoncus dictum. Nullam mattis porta velit porttitor tempus. Curabitur scelerisque justo quis aliquam dictum. Maecenas dolor diam, laoreet a convallis eu, sagittis dignissim justo. Suspendisse sed nibh id eros posuere convallis.</p>
                        <p className='mt-4'>Sed pretium hendrerit sem, a posuere massa venenatis eget. Nullam nec lacus id leo finibus sollicitudin. Maecenas odio mi, vehicula blandit libero quis, pharetra porta ex. Morbi facilisis efficitur ante, eget consectetur sapien congue quis. Maecenas magna lacus, pretium vitae nunc in, fringilla elementum lectus. Vestibulum ornare a felis quis auctor.</p>
                        <p className='mt-4'>Nullam hendrerit eget lacus a lacinia. Etiam auctor rhoncus sagittis. Maecenas sed finibus magna. Ut dignissim libero ut massa elementum, id maximus orci mollis. Mauris lectus nibh, condimentum non facilisis hendrerit, suscipit vitae magna. Nullam facilisis mi sit amet sapien aliquam scelerisque. Suspendisse vitae libero pellentesque, euismod arcu ut, auctor ipsum.</p>
                        <p className='mt-4'>Phasellus nec viverra massa. Donec pharetra odio imperdiet, ultricies turpis a, tincidunt lorem. Etiam ac elementum nunc. Sed pharetra nulla ac iaculis accumsan. Mauris ut libero luctus, posuere ipsum vel, hendrerit elit. Cras vestibulum, erat ac efficitur pulvinar, velit lorem luctus sapien, a facilisis purus ligula sed turpis</p>
                        <p className='mt-4'>Donec id fermentum tellus. Suspendisse ac nulla sed nisl facilisis tempor. Vestibulum volutpat nisl eu nisl tincidunt lobortis. Pellentesque hendrerit euismod viverra. Vivamus ut dolor lectus. Donec vestibulum scelerisque enim id iaculis. Cras quis nisi vel mauris euismod blandit lobortis at justo. Suspendisse tincidunt viverra quam nec congue. Maecenas quam leo, mollis quis nisi quis, ornare ultricies lacus.</p>
                    </div>
                </div>
            </div>
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    )
}

export default Terms