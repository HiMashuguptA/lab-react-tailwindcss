import React, { useEffect, useState } from 'react';
// import "./Homepage.css"


function Homepage() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, [])
    return (
        <>
            <div className='bg-red-400 flex justify-between h-20  '>
                <div className="flex justify-start  flex justify-evenly    justify-center   flex items-center w-1/2 pr-44">
                    <div>
                        <p className="text-lg   text-white   font-semibold">Kalvium</p>
                    </div>
                    <div>

                        <p className=" text-[#AAE1D0] cursor-pointer">About us</p>
                    </div>
                    <div>

                        <p className=" text-[#AAE1D0] cursor-pointer">Contacts</p>
                    </div>
                    <div>

                        <p className=" text-[#AAE1D0] cursor-pointer">courses</p>
                    </div>
                </div>

                <div className="flex flex-row-reverse   justify-center   flex items-center   mr-12 ">
                    <button className=" border-solid border-2 border-white-500 text-white font-bold py-2 px-4 rounded w-24 h-10 align-middle text-center flex content-center items-center justify-center">
                        Login
                    </button>
                </div>
            </div>
            <div className='justify-center   flex items-center   w-1/1 mt-5 '>
                <div className='w-4/5'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button one
                    </button>
                    <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded relative w-1/1 mt-5" role="alert">
                        <strong className="font-bold">Alert !</strong>
                        <span className="block sm:inline"> This is awesome</span>
                    </div>
                    <div className=' w-[100%] flex justify-center -mt-7'>
                        <div className='justify-center flex items-center mt-10 border-4 border-[#fff] rounded-lg bg-white drop-shadow-lg w-[30rem] h-32'>
                            <div>
                                <img className='w-4/5' src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-lg   font-semibold'>Kalvium store</h1>
                                <p>You have a new course</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="bg-[#E5E7EB] container mx-auto justify-center flex items-center h-14 text-[#444D5C] mt-0">
                    &#169; 2021 copyright:Kalvium               
            </div>
        </>
    );
}

export default Homepage;