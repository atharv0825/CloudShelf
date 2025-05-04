import React, { useEffect, useState } from 'react'
import './Profile.css'
import { getFiles , get } from '../../Services/UserApiServices';
const ProfileCard = () => {
    const [file , setFile] = useState([]);
    const [emailID, setEmailID] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem("email");
            setEmailID(email);
    
            try {
                const username = await getUsername(email); // ✅ await the async call
                setName(username);
            } catch (error) {
                console.error("Failed to fetch username", error);
            }
    
            try {
                const data = await getFiles(email);
                setFile(data);
            } catch (error) {
                console.error("Failed to fetch files", error);
            }
        };
    
        fetchData(); // ✅ call the async function
    }, []); // ✅ dependency array to run only on mount
    


    return (
        <>
            <div className='mt-40'>
                <div className="row text-center mb-5">
                    <div className="col">
                        <h2 className="display-4 fw-bold gradient-text">Your Activity Dashboard</h2>
                        <p className="text-muted"> Manage your files, track your interactions, and see your shelf grow</p>
                    </div>
                </div>
                <section
                    className="w-100 px-4 py-5 "
                    style={{ borderRadius: '.5rem .5rem 0 0' }} // ✅ JSX uses object style
                >
                    <div className="row d-flex justify-content-center">
                        <div className="col col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                                alt="Generic placeholder"
                                                className="img-fluid"
                                                style={{ width: '180px', borderRadius: '10px' }}
                                            />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-1 fs-4">{userDetails.name}</h5>
                                            <p className="mb-2 pb-1 fs-6">{userDetails.email}</p>
                                            <p className='fs-6'>Number of Uploded Files : {file.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProfileCard
