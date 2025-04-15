import React from 'react'
import './KeyFeatures.css'
const KeyFeatures = () => {
    return (

        <div class="container_key_features mt-10">
            <div class="row justify-content-center">
                <div class="col-12 text-center mb-5">
                    <h2 class="display-5 fw-bold mb-3">Why Choose CloudShelf?</h2>
                    <p class="text-muted mb-3">  CloudShelf isn’t just about storing files — it’s about giving you the freedom to access your digital life securely, quickly, and from anywhere. 
                    Here’s what makes us different.</p>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="service-card h-100 p-4">
                        <div class="icon-wrapper mb-4">
                            <svg width="32" height="32" fill="white" viewBox="0 0 16 16" class="bi bi-laptop">
                                <path
                                    d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                            </svg>
                        </div>
                        <h4 class="service-title text-center mb-3">Secure by AWS S3 </h4>
                        <p class="service-text text-center mb-0">Create stunning, responsive websites tailored to your brand's
                            unique vision and goals.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card h-100 p-4">
                        <div class="icon-wrapper mb-4">
                            <svg width="32" height="32" fill="white" viewBox="0 0 16 16" class="bi bi-phone">
                                <path
                                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                        </div>
                        <h4 class="service-title text-center mb-3">Mobile Apps</h4>
                        <p class="service-text text-center mb-0">Build powerful mobile applications that engage users and drive
                            results.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card h-100 p-4">
                        <div class="icon-wrapper mb-4">
                            <svg width="32" height="32" fill="white" viewBox="0 0 16 16" class="bi bi-graph-up">
                                <path
                                    d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                            </svg>
                        </div>
                        <h4 class="service-title text-center mb-3">Analytics</h4>
                        <p class="service-text text-center mb-0">Transform your data into actionable insights with our advanced
                            analytics solutions.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default KeyFeatures
