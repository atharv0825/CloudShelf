import React from 'react'

const ImageUpload = () => {
    return (
        <div className='main flex justify-center'>
            <div className="card rounded w-1/3 border shadow m-4 p-4">
                <h1 className='text-2xl'>Image Uploader</h1>
                <div className="form_container">
                    <form action="post">
                        <div className="feild_container flex flex-col gap-y-2">
                            <label htmlFor="file">Select File</label>
                            <input type="file" id='file'/>
                        </div>
                        <div className="feild_container">
                            <button className='px-3 py-2 bg-blue-700 hover:'>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload
