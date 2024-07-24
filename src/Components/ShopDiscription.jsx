import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopDiscription = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        review: ''
    });

    const [formMessages, setFormMessages] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Here you can add your form submission logic
            // For example, using fetch to send the form data to a server
            // Simulate a successful submission with a timeout
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
            setFormMessages('Review submitted successfully!');
            setFormData({
                name: '',
                email: '',
                rating: '',
                review: ''
            });
        } catch (error) {
            setFormMessages('Failed to submit the review. Please try again.');
        }
    };

    return (
        <div className="rs-shop-dec pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-shop-dec__tabs">
                            <Tab.Container defaultActiveKey="description">
                                <Nav variant="tabs" className="skltbs-tab-group">
                                    <Nav.Item className='skltbs-tab-item'>
                                        <Nav.Link className='skltbs-tab' eventKey="description">Description</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='skltbs-tab-item'>
                                        <Nav.Link className='skltbs-tab' eventKey="reviews">Reviews (0)</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="skltbs-panel-group">
                                    <Tab.Pane className='skltbs-panel' eventKey="description">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                    </Tab.Pane>
                                    <Tab.Pane className='skltbs-panel' eventKey="reviews">
                                        <div className="rs-review">
                                            <p>There are no reviews yet.</p>
                                            <span>Be the first to review “Purifier Sharp” </span>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <div className="input-box">
                                                <label>Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="input-box">
                                                <label>Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="input-box">
                                                <label>Your rating *</label>
                                                <ul className="rating">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <li key={star}>
                                                            <i
                                                                className={`ri-star-line ${formData.rating >= star ? 'selected' : ''}`}
                                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                            ></i>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="input-box">
                                                <label>Your review *</label>
                                                <textarea
                                                    name="review"
                                                    value={formData.review}
                                                    onChange={handleInputChange}
                                                    required
                                                ></textarea>
                                                <button className="main-btn" type="submit">Submit</button>
                                            </div>
                                        </form>
                                        <p id="form-messages" className="form-message">{formMessages}</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDiscription;
