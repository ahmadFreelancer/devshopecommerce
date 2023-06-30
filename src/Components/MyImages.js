import React, { useEffect, useState } from 'react'

export default function MyImages({ image }) {

    return (
        <div className='row singleProductImages'>
            <div className='col-4 w-100 d-flex flex-wrap singleLeftImages'>
                {
                    image && image.map((data, index) => {
                        return (
                        <div>
                            <img className='m-2' key={index} src={data.url} width={125} alt={data.filename} />
                        </div>
                        )
                    })
                }
            </div>
            
            <div className='col-8'>
                {
                    <img className='w-100' src={image && image[0].url} alt="Main Image" />
                }
            </div>

        </div>
    )
}
