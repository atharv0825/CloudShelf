import React from 'react'

const plans = () => {
    return (
        <div>
            <div classname="bg-light">
                <div classname="container py-5">
                    <div classname="row text-center mb-5">
                        <div classname="col">
                            <h2 classname="display-4 fw-bold">Choose Your Plan</h2>
                            <p classname="text-muted">Select the perfect plan for your needs</p>
                        </div>
                    </div>
                    <div classname="row row-cols-1 row-cols-md-3 g-4">

                        <div classname="col">
                            <div classname="card h-100 pricing-card shadow-sm">
                                <div classname="card-body p-5">
                                    <h5 classname="card-title text-muted text-uppercase mb-4">Starter</h5>
                                    <h1 classname="display-5 mb-4">$19<small classname="text-muted fw-light">/mo</small></h1>
                                    <ul classname="list-unstyled feature-list">
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>5 Projects</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>10GB Storage</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>Basic Support</li>
                                    </ul>
                                    <button classname="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>


                        <div classname="col">
                            <div classname="card h-100 pricing-card shadow position-relative">
                                <span classname="badge gradient-custom text-white popular-badge px-4 py-2">Popular</span>
                                <div classname="card-body p-5">
                                    <h5 classname="card-title text-primary text-uppercase mb-4">Professional</h5>
                                    <h1 classname="display-5 mb-4">$49<small classname="text-muted fw-light">/mo</small></h1>
                                    <ul classname="list-unstyled feature-list">
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>15 Projects</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>50GB Storage</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>Priority Support</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>Advanced Features</li>
                                    </ul>
                                    <button classname="btn gradient-custom text-white btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div classname="col">
                            <div classname="card h-100 pricing-card shadow-sm">
                                <div classname="card-body p-5">
                                    <h5 classname="card-title text-muted text-uppercase mb-4">Enterprise</h5>
                                    <h1 classname="display-5 mb-4">$99<small classname="text-muted fw-light">/mo</small></h1>
                                    <ul classname="list-unstyled feature-list">
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>Unlimited Projects</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>1TB Storage</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>24/7 Support</li>
                                        <li><i classname="bi bi-check2 text-primary me-2"></i>Custom Features</li>
                                    </ul>
                                    <button classname="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
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
