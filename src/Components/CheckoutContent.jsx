import React, { useEffect, useState } from 'react';

const CheckoutContent = ({ paypal }) => {
    const [countries, setCountries] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        cname: '',
        hnumber: '',
        city: '',
        district: '',
        pcode: '',
        number: '',
        email: '',
        notes: ''
    });
    const [formMessages, setFormMessages] = useState('');

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('../../countries.json');
                const data = await response.json();
                setCountries(data);
                const bangladeshIndex = data.findIndex(country => country.name.toLowerCase() === 'bangladesh');
                if (bangladeshIndex !== -1) {
                    setSelectedCountry(data[bangladeshIndex].code);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const response = await fetch('../../districtList.json');
                const data = await response.json();
                setDistricts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDistricts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            setFormMessages('Order submitted successfully!');
            // Reset form fields
            setFormData({
                fname: '',
                lname: '',
                cname: '',
                hnumber: '',
                city: '',
                district: '',
                pcode: '',
                number: '',
                email: '',
                notes: ''
            });
        } catch (error) {
            setFormMessages('Failed to submit the order. Please try again.');
        }
    };

    const countryOptions = countries.map((country, idx) => (
        <option key={idx} value={country.code}>
            {country.name}
        </option>
    ));

    const districtOptions = districts.map((district, idx) => (
        <option key={idx} value={district.code}>
            {district.name}
        </option>
    ));

    return (
        <div id="rs-checkout" className="rs-checkout pt-120 pb-120">
            <div className="container">
                <div className="coupon-toggle">
                    <div id="accordion" className="rs-accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <div className="card-title">
                                    <span><i className="ri-window-2-fill"></i> Have a coupon?</span>
                                    <button className="accordion-toggle" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">Click here to enter your code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="full-grid">
                    <form onSubmit={handleSubmit}>
                        <div className="billing-fields">
                            <div className="checkout-title">
                                <h2>Billing details</h2>
                            </div>
                            <div className="form-content-box">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>First Name *</label>
                                            <input
                                                id="fname"
                                                name="fname"
                                                className="form-control-mod"
                                                type="text"
                                                value={formData.fname}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Last Name *</label>
                                            <input
                                                id="lname"
                                                name="lname"
                                                className="form-control-mod"
                                                type="text"
                                                value={formData.lname}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Company name (optional)</label>
                                            <input
                                                id="cname"
                                                name="cname"
                                                className="form-control-mod"
                                                type="text"
                                                value={formData.cname}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Country*</label>
                                            <select
                                                id="country"
                                                className="d-block"
                                                required
                                                value={selectedCountry}
                                                onChange={(e) => setSelectedCountry(e.target.value)}
                                            >
                                                <option value="">Select Country</option>
                                                {countryOptions}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Street address *</label>
                                            <input
                                                id="hnumber"
                                                name="hnumber"
                                                className="form-control-mod margin-bottom"
                                                type="text"
                                                placeholder="House number and street name"
                                                value={formData.hnumber}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <input
                                                id="hnumber-2"
                                                name="hnumber-2"
                                                className="form-control-mod"
                                                type="text"
                                                placeholder="Apartment, suite, unit etc. (optional)"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Town / City *</label>
                                            <input
                                                id="city"
                                                name="city"
                                                className="form-control-mod"
                                                type="text"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>District *</label>
                                            <select
                                                className="d-block"
                                                required
                                                value={formData.district}
                                                onChange={handleInputChange}
                                                name="district"
                                            >
                                                <option value="">Select District</option>
                                                {districtOptions}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Postcode / ZIP (optional)</label>
                                            <input
                                                id="pcode"
                                                name="pcode"
                                                className="form-control-mod"
                                                type="text"
                                                value={formData.pcode}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Phone *</label>
                                            <input
                                                id="number"
                                                name="number"
                                                className="form-control-mod"
                                                type="text"
                                                value={formData.number}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Email address *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                className="form-control-mod"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="additional-fields">
                            <div className="form-content-box">
                                <div className="checkout-title">
                                    <h3>Additional information</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Order notes (optional)</label>
                                            <textarea
                                                name="notes"
                                                placeholder="Notes about your order, e.g. special notes for delivery."
                                                value={formData.notes}
                                                onChange={handleInputChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ordered-product">
                            <div className="checkout-title">
                                <h3>Your order</h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Medicine Bottle <strong><i className="ri-close-line"></i> 1</strong></td>
                                        <td>$30.00</td>
                                    </tr>
                                    <tr>
                                        <td>Medicine Bottle <strong><i className="ri-close-line"></i> 1</strong></td>
                                        <td>$30.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Subtotal</th>
                                        <th>$60.00</th>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <th>$60.00</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="payment-method mt-40 md-mt-20">
                            <div className="top-area">
                                <div className="payment-co"><span>PayPal</span> <img src={paypal} alt="PayPal Logo" /></div>
                                <div className="p-msg">Pay via PayPal you can pay with your credit card if you don’t have a PayPal account.</div>
                            </div>
                            <div className="bottom-area">
                                <p className="mt-15">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                <button className="main-btn mt-40" type="submit">Continue to payment</button>
                            </div>
                        </div>
                        {formMessages && <p id="form-messages" className="form-message">{formMessages}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutContent;
