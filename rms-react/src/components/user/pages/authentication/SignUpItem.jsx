import React from 'react'
import { Link } from 'react-router-dom'
import mdk from '../../../../assets/images/mdk.jpg'

const SignUpItem = () => {
  return (
    <section className='login'>
        <div className='container'>
            <div className='login_div'>
                <form>
                    <div className='form'>
                        <h1 className=''>Sign Up</h1>
                        <div>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                placeholder='name'
                            />
                        </div>

                        <div>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                placeholder='user email'
                            />
                        </div>

                        <div>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                placeholder='user password'
                            />
                        </div>

                        <div>
                            <input
                                type='password'
                                className='form-control'
                                name='confirm_password'
                                placeholder='confirm password'
                            />
                        </div>
                        <button className="btn">
                            <div>
                                {/* <img src='' alt='' height="15px" width="15px"/> */}
                                <span>Register</span>
                            </div>
                        </button>
                        <div className="forgot">
                            <Link to='/login'>Already Registered,</Link>
                            
                        </div>
                        <div className="social">
                            <img src={mdk} alt='madaki logo' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SignUpItem