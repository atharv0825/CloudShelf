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
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 285.938 285.938" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#ffffff;" d="M271.875,145.321h-28.791l-8.053-52.359c5.189,3.445,11.409,5.456,18.094,5.456 c18.094,0,32.813-14.728,32.813-32.817s-14.719-32.813-32.813-32.813s-32.813,14.719-32.813,32.813 c0,3.802,0.684,7.439,1.88,10.838l-17.934-15.356c-3.647-3.122-8.292-4.823-13.088-4.823h-64.608 c-7.753,0-14.063,6.309-14.063,14.063s6.309,14.063,14.063,14.063h58.036l-48.783,38.311 c-8.859,6.961-13.941,17.409-13.941,28.678c0,12.469,6.263,23.934,16.758,30.684l43.5,27.961l-36.67,15.281 c-3.684,1.533-6.581,4.561-7.95,8.302c-1.369,3.75-1.111,7.936,0.717,11.489c2.531,4.912,7.547,7.772,12.764,7.772 c1.936,0,3.9-0.394,5.77-1.223l50.55-22.313c7.894-3.675,12.998-11.686,12.998-20.405c0-5.934-2.405-11.738-6.6-15.923 l-28.73-28.734l27.084-23.705l2.091,16.72c1.148,9.211,9.009,16.167,18.286,16.167h39.431c7.753,0,14.063-6.309,14.063-14.063 C285.938,151.63,279.629,145.321,271.875,145.321z M253.125,42.158c12.923,0,23.438,10.514,23.438,23.438 s-10.514,23.438-23.438,23.438c-12.923,0-23.438-10.514-23.438-23.438S240.202,42.158,253.125,42.158z M271.875,164.071h-39.431 c-4.556,0-8.419-3.427-8.986-7.95l-4.28-34.228l-47.916,41.916l35.822,35.822c2.452,2.442,3.853,5.827,3.853,9.295 c0,5.086-2.981,9.764-7.5,11.873l-50.466,22.27c-2.4,1.073-5.213,0.07-6.413-2.259c-0.642-1.252-0.727-2.658-0.248-3.98 c0.483-1.312,1.458-2.334,2.752-2.873l39.839-16.598c2.611-1.083,4.388-3.506,4.636-6.323s-1.073-5.517-3.45-7.041L143.7,174.172 c-7.795-5.02-12.45-13.542-12.45-22.809c0-8.372,3.778-16.144,10.359-21.319l57.628-45.258l-9.797-9.778h-62.878 c-2.583,0-4.688-2.1-4.688-4.688c0-2.588,2.105-4.688,4.688-4.688h64.608c2.559,0,5.039,0.9,6.984,2.564l27.164,23.297 l9.722,63.202h36.834c2.583,0,4.688,2.1,4.688,4.688S274.458,164.071,271.875,164.071z"></path> <path style="fill:#ffffff;" d="M68.991,241.4c-2.353,2.677-6.314,3.136-9.206,1.073c-1.584-1.13-2.597-2.817-2.845-4.744 c-0.248-1.931,0.3-3.811,1.547-5.306l62.306-74.766l-7.2-6.005l-62.311,74.77c-2.892,3.469-4.219,8.03-3.642,12.511 s3.019,8.555,6.698,11.18c2.869,2.044,6.173,3.037,9.459,3.037c4.538,0,9.033-1.903,12.244-5.569l54.047-61.706l-7.055-6.178 L68.991,241.4z"></path> <rect x="37.5" y="93.758" style="fill:#ffffff;" width="103.125" height="9.375"></rect> <rect x="9.375" y="93.758" style="fill:#ffffff;" width="18.75" height="9.375"></rect> <rect x="46.875" y="112.508" style="fill:#ffffff;" width="70.313" height="9.375"></rect> <rect x="18.75" y="112.508" style="fill:#ffffff;" width="18.75" height="9.375"></rect> <rect x="51.563" y="131.258" style="fill:#ffffff;" width="60.938" height="9.375"></rect> <rect x="28.125" y="131.258" style="fill:#ffffff;" width="14.063" height="9.375"></rect> <rect x="28.125" y="75.008" style="fill:#ffffff;" width="79.688" height="9.375"></rect> <rect y="75.008" style="fill:#ffffff;" width="18.75" height="9.375"></rect> <rect x="9.375" y="84.383" style="fill:#ffffff;" width="98.438" height="9.375"></rect> <rect x="18.75" y="103.133" style="fill:#ffffff;" width="121.875" height="9.375"></rect> <rect x="28.125" y="121.883" style="fill:#ffffff;" width="89.063" height="9.375"></rect> <rect x="37.5" y="140.633" style="fill:#ffffff;" width="75" height="9.375"></rect> </g> </g> </g></svg>
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

