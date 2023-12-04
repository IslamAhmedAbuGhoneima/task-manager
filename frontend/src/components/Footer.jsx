import React from 'react'

const Footer = () => {
    let date = new Date()
    return (
        <footer className='pt-2 pb-2'>
            <div className='text-light text-center fs-5 fw-bold'>
                Created by Eslam Ahmed <span>&copy;{date.getFullYear()}</span> All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer