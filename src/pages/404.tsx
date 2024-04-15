import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Error() {
 
  return (
    <div className='relative h-screen container mx-auto px-4 py-8 flex flex-col justify-center items-center'>
       <div className="mb-8">
        <Image src="/assets/images/error.svg" width={200} height={200} alt="Error" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href="/"><button className="bg-primary text-white py-2 px-4 rounded-lg shadow hover:bg-primary-dark">Back to Home</button></Link>
    </div>
  )
}
