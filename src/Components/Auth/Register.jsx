import React from 'react'
import './style.css'
import HomeHeader from '../home/HomeHeder'

export default function Register() {
    return (
        <div className='reg-bg'>
        <HomeHeader/>
        <div className='flex-1 md:flex ' >
            <span className='text-5xl md:text-7xl w-1/2 relative top-32 left-8 md:top-48 md:left-12 m-0 p-2'>Start Saving your time <br/> quickly signup with <br/>Note-Ed<br/>
            
                

            </span>
            <div class="md:absolute md:right-64 bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    
                    <div class="bg-slate-300 shadow-slate-700 px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green text-black bg-blue-700 hover:bg-blue-400 focus:outline-none my-1"
                        >Create Account</button>

                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <a class="no-underline bg-yellow-500 p-0 border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
