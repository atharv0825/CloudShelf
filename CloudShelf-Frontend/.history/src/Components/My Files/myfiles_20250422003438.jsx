import React, { useEffect, useState } from 'react';
import './MyFiles.css'
import { getFiles } from '../../Services/UserApiServices';

const MyFiles = () => {

    const [file, setfile] = useState([]);

    useEffect(() => {
        const email = localStorage.getItem('email')
        getFiles(email).then(data => {
            setfile(data);
        })
    }, []);

    const handleDownload = (fileURL) => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container my-5">
            <div className="row text-center mb-5">
                <div className="col">
                    <h2 className="display-4 fw-bold gradient-text">Your Cloud Shelf Awaits</h2>
                    <p className="text-muted">Access, manage, and explore your files with ease</p>
                </div>
            </div>

            < div className="row" >
                {file.map((imageURL, index) => (

                    <div className="col-md-4 mb-4" key={index}>
                        <div className="mycard">

                            <button
                                // onClick={() => handleDelete(imageURL)}
                                className="btn btn-danger btn-sm position-absolute"
                                style={{ top: '10px', right: '10px' }}
                            >
                                
                            </button>

                            {
                                imageURL.toLowerCase().endsWith('.pdf') ? (
                                    <img src="./src/assets/PDF image.png" width='50px' height='50' />
                                ) : (
                                    <img src={imageURL} />
                                )
                            }

                            <div className="download-btn-container">
                                <button
                                    onClick={() => handleDownload(imageURL)}
                                    className="download-btn"
                                >
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                )
                )}
            </div>

        </div >
    );
}

export default MyFiles;
