import React from 'react'
import './plans.css'
const plans = () => {
    return (
        <div>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row text-center mb-5">
                        <div className="col">
                            <h2 className="display-4 fw-bold">Choose Your Plan</h2>
                            <p className="text-muted">Select the perfect plan for your needs</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        <div className="col">
                            <div className="card h-100 pricing-card shadow-sm">
                                <div className="card-body p-5">
                                    <h5 className="card-title text-muted text-uppercase mb-4">Starter</h5>
                                    <h1 className="display-5 mb-4">&#8377;0<small className="text-muted fw-light">/mo</small></h1>
                                    <ul className="list-unstyled feature-list">
                                        <li><i className="bi bi-check2 text-primary me-2"></i>5GB Storage</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>API Requests 1,000/month</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>Extra Storage Not Allowed</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>Extra Request Not Allowed</li>
                                    </ul>
                                    <button className="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card h-100 pricing-card shadow position-relative">
                                <span className="badge gradient-custom text-white popular-badge px-4 py-2">Popular</span>
                                <div className="card-body p-5">
                                    <h5 className="card-title text-primary text-uppercase mb-4">Basic Plan</h5>
                                    <h1 className="display-5 mb-4">&#8377;199<small className="text-muted fw-light">/mo</small></h1>
                                    <ul className="list-unstyled feature-list">
                                        <li><i className="bi bi-check2 text-primary me-2"></i>25GB Storage</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>API Requests 5,000/month</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>Extra Storage Not Allowed</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>Advanced Features</li>
                                    </ul>
                                    <button className="btn gradient-custom text-white btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 pricing-card shadow-sm">
                                <div className="card-body p-5">
                                    <h5 className="card-title text-muted text-uppercase mb-4">Enterprise</h5>
                                    <h1 className="display-5 mb-4">$99<small className="text-muted fw-light">/mo</small></h1>
                                    <ul className="list-unstyled feature-list">
                                        <li><i className="bi bi-check2 text-primary me-2"></i>Unlimited Projects</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>1TB Storage</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>24/7 Support</li>
                                        <li><i className="bi bi-check2 text-primary me-2"></i>Custom Features</li>
                                    </ul>
                                    <button className="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default plans
