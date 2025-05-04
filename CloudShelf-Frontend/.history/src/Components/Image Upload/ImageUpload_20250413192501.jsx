import React, { useState } from 'react';
import './ImageUpload.css';
import axios from 'axios';  

const ImageUpload = () => {
    const [fileName, setFileName] = useState("No File Chose");
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null); 
    const [isUploading, setIsUploading] = useState(false);

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

        if (!file) {
            setUploadStatus("Please select a file before uploading.");
            return;
        }

        // Check for token and email
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');
        console.log(email);
        console.log(token);
        if (!email || !token) {
            setUploadStatus("Please log in first.");
            return;
        }

        setIsUploading(true); // Start loading

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('email', email); 
            
            const response = await axios.post('http://localhost:9090/cloudshelf/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${token}`
                }
            });

            // Handle the response
            if (response.status === 200) {
                setUploadStatus("File uploaded successfully!");
            } else {
                setUploadStatus(`File upload failed. Status code: ${response.status}`);
            }
        } catch (error) {
            setUploadStatus("File upload failed. Please try again.");
            console.error('File upload failed', error);
        }

        setIsUploading(false); // End loading
    };

    // Handle Clear button
    const handleClear = () => {
        setFileName("No File Chose");
        setFile(null);
        setUploadStatus(null);  // Clear any previous upload status
        document.getElementById("fileUpload").value = ""; // Clear file input value
    };

    return (
        <div className='main flex justify-center text-center mt-20 mb'>
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
                    {uploadStatus && (
                        <div className={`mt-3 ${uploadStatus.includes("failed") ? 'text-red-500' : 'text-green-500'}`}>
                            {uploadStatus}
                        </div>
                    )}
                    {isUploading && <div className="loading-spinner">Uploading...</div>}
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
