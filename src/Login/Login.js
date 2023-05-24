import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState('')
    return (
        <div className='h-[800px flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-2xl'>Login</h1>

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type='text' {...register("email")} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password</span>

                        </label>

                    </div>

                    <p>{data}</p>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p>New Doctors Portal<Link className='text-orange-600' to='/sinup'>Create in Signup</Link> </p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                    <div className="divider">OR</div>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                </div>
            </div>
        </div>
    );
};

export default Login;