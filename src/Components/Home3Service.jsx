import React from 'react';
import { Link } from 'react-router-dom';

const Home3Service = ({ service_icon }) => {
    const services = [
        { img: service_icon, title: 'IT Consultation', details: 'Podcasting Optonal Change Management Inside Of Workflows To Establish.'},
        { img: service_icon, title: 'Data Security', details: 'Leverage Agile Frameworks To Provide A Robust Synopsis For High Level Overviews.' },
        { img: service_icon, title: 'Digital Marketing', details: 'Capitalize On Low Hanging Fruit Identify A Ballpark Added Value Activity To Beta Test.'},
        { img: service_icon, title: 'Cloud Services', details: 'Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.' },
    ]
    return (
        <div className="single-service pt-90 ">
            <div className="container">
                <div className="row">
                    {
                        services && services.map((service, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="single-service__item">
                                        <div className="single-service__icon">
                                            <img src={service.img} alt="" />
                                        </div>
                                        <Link to="#">{service.title}</Link>
                                        <p>{service.details}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home3Service;
