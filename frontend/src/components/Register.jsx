import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const Register = () => {

  const [massage, setMassage] = useState("");
    const { register, 
        handleSubmit, 
        watch, 
        formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleGoogleSignIn = () => {
        
    }

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                    <input 
                    {...register("email", { required: true })}
                    type='email' name='email' id='email' placeholder='Email Address'  className='shadow appearance-none border rounded w-full py-2 px-3
                    leading-tight focus:outline-none' focus:shadow />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Password'>Password</label>
                    <input 
                    {...register("password", { required: true })}
                    type='passwoer' name='Password' id='Password' placeholder='Password'  className='shadow appearance-none border rounded w-full py-2 px-3
                    leading-tight focus:outline-none' focus:shadow />
                </div>

                {
                    massage && <p className='text-red-500 text-xs italic mb-3'>{massage}</p>
                }
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Regirter</button>
                </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Haven an account? Please 
                <Link to="/login" className='text-blue-500 hover:text-blue-700'> Login</Link>
            </p>

            {/*google */}
            <div className='mt-4'>
                <button 
                onClick={handleGoogleSignIn}
                className='w-full flex flex-wrap gap-1 items-center justify-center bg-black hover:bg-blue-700
                text-white font-bold py-2 px-4 rounded focus:outline-none'>
                    <FaGoogle className='mr-2' />
                    Sign in whit Gooogle
                </button>
            </div>
            <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>

        </div>
    </div>
  )
}

export default Register