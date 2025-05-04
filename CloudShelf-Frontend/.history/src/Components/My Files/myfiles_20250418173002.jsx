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

            {file.map((imageURL, index)=>(
                < div className = "row" >
                <div className="col-md-4 )mb-4">
                    <img=> src='' />
                </div>
            </div>)
    )
}

        </div >
    );
}

export default MyFiles;
