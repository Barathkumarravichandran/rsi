import React from 'react';

const ServiceDetails2_Feature = ({repair_expesrt,bar_charat,ideaa}) => {
    return (
        <div className="rs-service-details-features pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="rs-service-details-features__item">
                            <div className="icon">
                                <img src={repair_expesrt} alt="" />
                            </div>
                            <h5 className="title">Expert Peoples</h5>
                            <p> At vero eos et accusamus etiusto odio praesentium.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rs-service-details-features__item">
                            <div className="icon">
                                <img src={bar_charat} alt="" />
                            </div>
                            <h5 className="title">First Growing Process</h5>
                            <p> At vero eos et accusamus etiusto odio praesentium.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rs-service-details-features__item">
                            <div className="icon">
                                <img src={ideaa} alt="" />
                            </div>
                            <h5 className="title">Creative Ideas</h5>
                            <p> At vero eos et accusamus etiusto odio praesentium.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails2_Feature;