import React from 'react'

const plans = () => {
    return (
        <div>
            <div class="bg-light">
                <div class="container py-5">
                    <div class="row text-center mb-5">
                        <div class="col">
                            <h2 class="display-4 fw-bold">Choose Your Plan</h2>
                            <p class="text-muted">Select the perfect plan for your needs</p>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100 pricing-card shadow-sm">
                                <div class="card-body p-5">
                                    <h5 class="card-title text-muted text-uppercase mb-4">Starter</h5>
                                    <h1 class="display-5 mb-4">$19<small class="text-muted fw-light">/mo</small></h1>
                                    <ul class="list-unstyled feature-list">
                                        <li><i class="bi bi-check2 text-primary me-2"></i>5 Projects</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>10GB Storage</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>Basic Support</li>
                                    </ul>
                                    <button class="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>

                      
                        <div class="col">
                            <div class="card h-100 pricing-card shadow position-relative">
                                <span class="badge gradient-custom text-white popular-badge px-4 py-2">Popular</span>
                                <div class="card-body p-5">
                                    <h5 class="card-title text-primary text-uppercase mb-4">Professional</h5>
                                    <h1 class="display-5 mb-4">$49<small class="text-muted fw-light">/mo</small></h1>
                                    <ul class="list-unstyled feature-list">
                                        <li><i class="bi bi-check2 text-primary me-2"></i>15 Projects</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>50GB Storage</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>Priority Support</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>Advanced Features</li>
                                    </ul>
                                    <button class="btn gradient-custom text-white btn-lg w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 pricing-card shadow-sm">
                                <div class="card-body p-5">
                                    <h5 class="card-title text-muted text-uppercase mb-4">Enterprise</h5>
                                    <h1 class="display-5 mb-4">$99<small class="text-muted fw-light">/mo</small></h1>
                                    <ul class="list-unstyled feature-list">
                                        <li><i class="bi bi-check2 text-primary me-2"></i>Unlimited Projects</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>1TB Storage</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>24/7 Support</li>
                                        <li><i class="bi bi-check2 text-primary me-2"></i>Custom Features</li>
                                    </ul>
                                    <button class="btn btn-outline-primary btn-lg w-100 mt-4">Get Started</button>
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
