import React from 'react'
import './KeyFeatures.css'
const KeyFeatures = () => {
    return (

        <div className="container_key_features mt-10">
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Why Choose CloudShelf?</h2>
                    <p className="text-muted mb-3">  CloudShelf isn’t just about storing files — it’s about giving you the freedom to access your digital life securely, quickly, and from anywhere.
                        Here’s what makes us different.</p>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                            <svg fill="#ffffff" height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 214.27 214.27" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01 c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5 c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414 c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812 c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285 c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812 z"></path> <path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607 l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5 c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z"></path> </g> </g></svg>
                        </div>
                        <h4 className="service-title text-center mb-3">Secure by AWS S3 </h4>
                        <p className="service-text text-center mb-0">Bank-grade encryption and secure access control.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                            <svg width= fill="#ffffff" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.5 0c-.654 0-.65 1 0 1h6.842c.72 0 .73.408.554.77l-3.84 7.5c-.172.334.07.73.444.73h7.072c.15 0 .323.093.39.248.07.155.095.443-.288.95L10.33 27.57l1.664-9.988c.05-.305-.185-.583-.494-.582H7.54c-.557 0-.6-.164-.505-.934l1.96-14.5c.09-.66-.903-.794-.99-.132l-1.962 14.5c-.075.556-.06 1.048.203 1.46.264.413.768.606 1.293.606h3.368L9.006 29.418c-.086.516.578.8.892.383l13.575-18c.524-.694.643-1.406.406-1.95-.24-.544-.77-.85-1.308-.85h-6.254l3.467-6.77c.188-.368.316-.856.12-1.36C19.707.363 19.12 0 18.34 0z"></path></g></svg>
                        </div>
                        <h4 className="service-title text-center mb-3">Lightning Fast Access </h4>
                        <p className="service-text text-center mb-0">Optimized file delivery powered by S3.
                            results.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                            <svg width="32" height="32" fill="white" viewBox="0 0 16 16" className="bi bi-graph-up">
                                <path
                                    d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                            </svg>
                        </div>
                        <h4 className="service-title text-center mb-3">Global Availability </h4>
                        <p className="service-text text-center mb-0">TAccess files from anywhere on the planet.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default KeyFeatures

