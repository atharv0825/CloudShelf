import React from 'react';
import './MyFiles.css'
const MyFiles = () => {



    return (
        <div className="container my-5">
            <div className="row text-center mb-5">
                <div className="col">
                    <h2 className="display-4 fw-bold">Your Cloud Shelf Awaits</h2>
                    <p className="text-muted">Access, manage, and explore your files with ease</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="mycard" style={{ backgroundImage: "url('https://picsum.photos/id/1/800/600')" }}>
                        <h3>Random Card 1</h3>
                        <p>This is a randomly generated mycard.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="mycard" style={{ backgroundImage: "url('https://picsum.photos/id/2/800/600')" }}>
                        <h3>Random Card 2</h3>
                        <p>This is a randomly generated mycard.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="mycard" style={{ backgroundImage: "url('https://picsum.photos/id/3/800/600')" }}>
                        <h3>Random Card 3</h3>
                        <p>This is a randomly generated mycard.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="mycard" style={{ backgroundImage: "url('https://picsum.photos/id/3/800/600')" }}>
                        <h3>Random Card 3</h3>
                        <p>This is a randomly generated mycard.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="mycard" style={{ backgroundImage: "url('https://picsum.photos/id/3/800/600')" }}>
                        <h3>Random Card 3</h3>
                        <p>This is a randomly generated mycard.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="mycard" style={{ backgroundImage: "url('https://picsum.photos/id/3/800/600')" }}>
                        <h3>Random Card 3</h3>
                        <p>This is a randomly generated mycard.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyFiles;
