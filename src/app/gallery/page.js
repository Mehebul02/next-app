import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className='flex flex-col items-center'>
           <h1>gallery page</h1>
           {/* <img src = 'https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg'alt='next jd'/> */}

           <h1>Next Js components image</h1>
           <Image src='https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg' loading='lazy' alt='next image' height={400} width={400}/>
        </div>
    );
};

export default GalleryPage;