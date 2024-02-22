import React from 'react'
import { Link } from 'react-router-dom'
import mdk from '../../../../assets/images/mdk.jpg'

const LoginItem = () => {
  return (
    <section className='login'>
        <div className='container'>
            <div className='login_div'>
                <form>
                    <div className='form'>
                        <h1 className=''>Login</h1>
                        <div>
                            <input
                                type='email'
                                className='form-control'
                                name='ename'
                                placeholder='ename'
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
                        <button className="btn">
                            <div>
                                {/* <img src='' alt='' height="15px" width="15px"/> */}
                                <span>Login</span>
                            </div>
                        </button>
                        <div className="forgot">
                            <Link to='/signup'>Don't have any  account ?</Link>
                            <Link to='/forgot-password'>forgot your password ?</Link>
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

export default LoginItem