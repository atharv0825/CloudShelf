import React from 'react'

const plans = () => {
    return (
        <div>
            <div N="bg-light">
                <div N="container py-5">
                    <div N="row text-center mb-5">
                        <div N="col">
                            <h2 N="display-4 fw-bold">Choose Your Plan</h2>
                            <p N="text-muted">Select the perfect plan for your needs</p>
                        </div>
                    </div>
                    <div N="row row-cols-1 row-cols-md-3 g-4">

                        <div N="col">
                            <div N="card h-100 pricing-card shadow-sm">
                                <div N="card-body p-5">
                                    <h5 N="card-title text-muted text-uppercase mb-4">Starter</h5>
                                    <h1 N="display-5 mb-4">$19<small N="text-muted fw-light">/mo</small></h1>
                                    <ul N="list-unstyled feature-list">
                                        <li><i N="bi bi-check2 text-primary me-2"></i>5 Projects</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>10GB Storage</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>Basic Support</li>
                                    </ul>
                                    <button N="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>


                        <div N="col">
                            <div N="card h-100 pricing-card shadow position-relative">
                                <span N="badge gradient-custom text-white popular-badge px-4 py-2">Popular</span>
                                <div N="card-body p-5">
                                    <h5 N="card-title text-primary text-uppercase mb-4">Professional</h5>
                                    <h1 N="display-5 mb-4">$49<small N="text-muted fw-light">/mo</small></h1>
                                    <ul N="list-unstyled feature-list">
                                        <li><i N="bi bi-check2 text-primary me-2"></i>15 Projects</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>50GB Storage</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>Priority Support</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>Advanced Features</li>
                                    </ul>
                                    <button N="btn gradient-custom text-white btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div N="col">
                            <div N="card h-100 pricing-card shadow-sm">
                                <div N="card-body p-5">
                                    <h5 N="card-title text-muted text-uppercase mb-4">Enterprise</h5>
                                    <h1 N="display-5 mb-4">$99<small N="text-muted fw-light">/mo</small></h1>
                                    <ul N="list-unstyled feature-list">
                                        <li><i N="bi bi-check2 text-primary me-2"></i>Unlimited Projects</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>1TB Storage</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>24/7 Support</li>
                                        <li><i N="bi bi-check2 text-primary me-2"></i>Custom Features</li>
                                    </ul>
                                    <button N="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
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
