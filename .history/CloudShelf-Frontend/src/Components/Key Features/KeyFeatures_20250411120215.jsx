import React from 'react'

const KeyFeatures = () => {
    return (
        <div className='container'>
            <section className="features-section py-5 bg-white text-center">
                <div className="container">
                    <h2 className="mb-4">Why Choose CloudShelf?</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <i className="fas fa-lock fa-3x mb-3 text-primary"></i>
                            <h4>Secure Storage</h4>
                            <p>Your files are encrypted and stored safely in the cloud.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fas fa-cloud-upload-alt fa-3x mb-3 text-primary"></i>
                            <h4>Easy Upload</h4>
                            <p>Drag, drop, and upload your files effortlessly.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fas fa-sync-alt fa-3x mb-3 text-primary"></i>
                            <h4>Real-time Sync</h4>
                            <p>Keep your data synced across all your devices.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default KeyFeatures
