import React from 'react'
import './ImageUpload.css'
const ImageUpload = () => {
    return (
        <div className='main flex justify-center text-center'>
            <div className="card rounded w-1/3 border shadow m-4 p-4">
                <h1 className='text-2xl'>Image Uploader</h1>
                <div className="form_container">
                    <form action="post">
                        <div className="feild_container flex flex-col gap-y-2">
                            <label htmlFor="file">Select File</label>
                            <label
                                htmlFor="fileUpload"
                                className="bg-gray-200 p-2 w-fit cursor-pointer rounded">
                                    
                                </label>
                        </div>
                        <div className="feild_container">
                            <button className='px-3 py-2'>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload
