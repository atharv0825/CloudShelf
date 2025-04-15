import React, { useState } from 'react'
import './ImageUpload.css'
import NavigationBar from '../Navigation Bar/NavigationBar';
import Footer from '../Footer/Footer';
const ImageUpload = () => {

    const [fileName, setFileName] = useState("No File Chose");


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
        else {
            setFileName("No file chosen");
        }


    };

    const formSubmit = (event) => {

    }

    return (
        <>
            <div className='main flex justify-center text-center mt-20'>
                <div className="card rounded w-1/3 border shadow m-4 p-4">
                    <h1 className='text-2xl'>Image Uploader</h1>
                    <div className="form_container">
                        <form action="post" onSubmit={formSubmit}>
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
                                <button className='px-3 py-2 ml-1'>Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageUpload
