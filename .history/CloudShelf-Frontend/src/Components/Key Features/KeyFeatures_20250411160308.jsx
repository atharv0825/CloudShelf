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
                            <svg fill="#ffffff" height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 214.27 214.27" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01 c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5 c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414 c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812 c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285 c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812 z"></path> <path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607 l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5 c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z"></path> </g> </g></svg>
                        </div>
                        <h4 className="service-title text-center mb-3">Secure by AWS S3 </h4>
                        <p className="service-text text-center mb-0">Bank-grade encryption and secure access control.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                            <svg width="60px" height="60px" fill="#ffffff" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.5 0c-.654 0-.65 1 0 1h6.842c.72 0 .73.408.554.77l-3.84 7.5c-.172.334.07.73.444.73h7.072c.15 0 .323.093.39.248.07.155.095.443-.288.95L10.33 27.57l1.664-9.988c.05-.305-.185-.583-.494-.582H7.54c-.557 0-.6-.164-.505-.934l1.96-14.5c.09-.66-.903-.794-.99-.132l-1.962 14.5c-.075.556-.06 1.048.203 1.46.264.413.768.606 1.293.606h3.368L9.006 29.418c-.086.516.578.8.892.383l13.575-18c.524-.694.643-1.406.406-1.95-.24-.544-.77-.85-1.308-.85h-6.254l3.467-6.77c.188-.368.316-.856.12-1.36C19.707.363 19.12 0 18.34 0z"></path></g></svg>
                        </div>
                        <h4 className="service-title text-center mb-3">Lightning Fast Access </h4>
                        <p className="service-text text-center mb-0">Optimized file delivery powered by S3.
                            results.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                            <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.64859 20.9098C7.61859 20.9098 7.57859 20.9298 7.54859 20.9298C5.60859 19.9698 4.02859 18.3798 3.05859 16.4398C3.05859 16.4098 3.07859 16.3698 3.07859 16.3398C4.29859 16.6998 5.55859 16.9698 6.80859 17.1798C7.02859 18.4398 7.28859 19.6898 7.64859 20.9098Z" fill="#ffffff"></path> <path d="M20.9391 16.4498C19.9491 18.4398 18.2991 20.0498 16.2891 21.0198C16.6691 19.7498 16.9891 18.4698 17.1991 17.1798C18.4591 16.9698 19.6991 16.6998 20.9191 16.3398C20.9091 16.3798 20.9391 16.4198 20.9391 16.4498Z" fill="#ffffff"></path> <path d="M21.0191 7.71047C19.7591 7.33047 18.4891 7.02047 17.1991 6.80047C16.9891 5.51047 16.6791 4.23047 16.2891 2.98047C18.3591 3.97047 20.0291 5.64047 21.0191 7.71047Z" fill="#ffffff"></path> <path d="M7.65047 3.08859C7.29047 4.30859 7.03047 5.54859 6.82047 6.80859C5.53047 7.00859 4.25047 7.32859 2.98047 7.70859C3.95047 5.69859 5.56047 4.04859 7.55047 3.05859C7.58047 3.05859 7.62047 3.08859 7.65047 3.08859Z" fill="#ffffff"></path> <path d="M15.4917 6.59C13.1717 6.33 10.8317 6.33 8.51172 6.59C8.76172 5.22 9.08172 3.85 9.53172 2.53C9.55172 2.45 9.54172 2.39 9.55172 2.31C10.3417 2.12 11.1517 2 12.0017 2C12.8417 2 13.6617 2.12 14.4417 2.31C14.4517 2.39 14.4517 2.45 14.4717 2.53C14.9217 3.86 15.2417 5.22 15.4917 6.59Z" fill="#ffffff"></path> <path d="M6.59 15.4917C5.21 15.2417 3.85 14.9217 2.53 14.4717C2.45 14.4517 2.39 14.4617 2.31 14.4517C2.12 13.6617 2 12.8517 2 12.0017C2 11.1617 2.12 10.3417 2.31 9.56172C2.39 9.55172 2.45 9.55172 2.53 9.53172C3.86 9.09172 5.21 8.76172 6.59 8.51172C6.34 10.8317 6.34 13.1717 6.59 15.4917Z" fill="#ffffff"></path> <path d="M22.0002 12.0017C22.0002 12.8517 21.8802 13.6617 21.6902 14.4517C21.6102 14.4617 21.5502 14.4517 21.4702 14.4717C20.1402 14.9117 18.7802 15.2417 17.4102 15.4917C17.6702 13.1717 17.6702 10.8317 17.4102 8.51172C18.7802 8.76172 20.1502 9.08172 21.4702 9.53172C21.5502 9.55172 21.6102 9.56172 21.6902 9.56172C21.8802 10.3517 22.0002 11.1617 22.0002 12.0017Z" fill="#ffffff"></path> <path d="M15.4917 17.4102C15.2417 18.7902 14.9217 20.1502 14.4717 21.4702C14.4517 21.5502 14.4517 21.6102 14.4417 21.6902C13.6617 21.8802 12.8417 22.0002 12.0017 22.0002C11.1517 22.0002 10.3417 21.8802 9.55172 21.6902C9.54172 21.6102 9.55172 21.5502 9.53172 21.4702C9.09172 20.1402 8.76172 18.7902 8.51172 17.4102C9.67172 17.5402 10.8317 17.6302 12.0017 17.6302C13.1717 17.6302 14.3417 17.5402 15.4917 17.4102Z" fill="#ffffff"></path> <path d="M15.7633 15.7633C13.2622 16.0789 10.7378 16.0789 8.23667 15.7633C7.92111 13.2622 7.92111 10.7378 8.23667 8.23667C10.7378 7.92111 13.2622 7.92111 15.7633 8.23667C16.0789 10.7378 16.0789 13.2622 15.7633 15.7633Z" fill="#ffffff"></path> </g></svg>
                        </div>
                        <h4 className="service-title text-center mb-3">Global Availability </h4>
                        <p className="service-text text-center mb-0">TAccess files from anywhere on the planet.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                            <svg width="50px" height="50px" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.92,2.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59L12,10.59,9.88,8.46A1,1,0,0,0,8.46,9.88L10.59,12,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41L12,13.41l2.12,2.13a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L13.41,12,20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"></path></g></svg>
                        </div>
                        <h4 className="service-title text-center mb-3"> Scalable Storage </h4>
                        <p className="service-text text-center mb-0">From megabytes to terabytes, we scale with your needs.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                            <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.56499 12.4068C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4068ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1564 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1564 7.70784 16.9932L7.14286 16.5ZM15.565 7.99324C15.8374 7.68121 15.8053 7.20742 15.4932 6.93501C15.1812 6.6626 14.7074 6.69472 14.435 7.00676L15.565 7.99324ZM10.5064 11.5068C10.234 11.8188 10.2662 12.2926 10.5782 12.565C10.8902 12.8374 11.364 12.8053 11.6364 12.4932L10.5064 11.5068ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7568L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0068L4.56499 12.4068L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7568L6.57787 16.0068L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25676L10.5064 11.5068L11.6364 12.4932ZM13.6007 10.2432L15.565 7.99324L14.435 7.00676L12.4707 9.25676L13.6007 10.2432Z" fill="#f9f9fb"></path> <path d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125" stroke="#f9f9fb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>                        </div>
                        <h4 className="service-title text-center mb-3"> Easy File Management </h4>
                        <p className="service-text text-center mb-0">Upload, delete, and manage files with a clean UI.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card h-100 p-4">
                        <div className="icon-wrapper mb-4">
                        <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>                        </div>
                        <h4 className="service-title text-center mb-3"> Mobile Friendly </h4>
                        <p className="service-text text-center mb-0">Access and manage your files from any device — laptop, tablet, or smartphone.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default KeyFeatures

