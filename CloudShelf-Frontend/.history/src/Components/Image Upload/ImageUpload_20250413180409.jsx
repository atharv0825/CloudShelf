import React, { useState } from 'react';
import './ImageUpload.css';
import NavigationBar from '../Navigation Bar/NavigationBar';
import Footer from '../Footer/Footer';
import axios from 'axios';  // Make sure you have axios installed (npm install axios)

const ImageUpload = () => {
    const [fileName, setFileName] = useState("No File Chose");
    const [selectedfile, setFile] = useState(null);

    // Handle file change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
            setFile(selectedFile);
        } else {
            setFileName("No file chosen");
            setFile(null);
        }
    };

    // Handle form submission
    const formSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const formData = new FormData();
            const email = localStorage.getItem('email'); 
            formData.append('file', selectedFile);
            formData.append('email', email); 
    
            const token = localStorage.getItem('token'); 
            const response = await axios.post('http://localhost:9090/cloudshelf/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Pass the JWT token in the Authorization header
                }
            });
    
            console.log(response.data);
        } catch (error) {
            console.error('File upload failed', error);
        }
    };
    
    // Handle Clear button
    const handleClear = () => {
        setFileName("No File Chose");
        setFile(null);
    };

    return (
        <>
            <div className='main flex justify-center text-center mt-20'>
                <div className="card rounded w-1/3 border shadow m-4 p-4">
                    <h1 className='text-2xl'>Image Uploader</h1>
                    <div className="form_container">
                        <form onSubmit={formSubmit}>
                            <div className="feild_container flex flex-col gap-y-2">
                                <label htmlFor="file">Select File</label>
                                <input
                                    type="file"
                                    id="fileUpload"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <div className="flex justify-center">
                                    <label
                                        htmlFor="fileUpload"
                                        className="bg-gray-200 p-2 w-fit cursor-pointer rounded">
                                        Choose File
                                    </label>
                                </div>
                                <div className="text-center text-sm text-gray-800 mt-1">{fileName}</div>
                            </div>
                            <div className="feild_container">
                                <button type='submit' className='px-3 py-2'>Upload</button>
                                <button
                                    type="button"
                                    className='px-3 py-2 ml-1'
                                    onClick={handleClear}>Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageUpload;
