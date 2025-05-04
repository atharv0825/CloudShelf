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
                        <img src={imageURL} width='100px' height='100px'/>
                        <div className="mycard" style={{ backgroundImage: `url(${url})` }}>
                                <h3>File {index + 1}</h3>
                                <p>This is your uploaded file.</p></div>
                    </div>
                )
            )}
            </div>

        </div >
    );
}

export default MyFiles;
