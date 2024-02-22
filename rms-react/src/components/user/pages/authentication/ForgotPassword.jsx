import React from 'react'
import NavBar from '../navigation/NavBar'
import Footer from '../../footer/footer'
import { Link } from 'react-router-dom'
import mdk from '../../../../assets/images/mdk.jpg'

const ForgotPassword = () => {
  return (
    <>
        <NavBar hero="Forgot Password" cmp="auth"/>
        <section className='login'>
        <div className='container'>
            <div className='login_div'>
                <form>
                    <div className='form'>
                        <h1 className=''>Forgot Password</h1>
                        <div>
                            <input
                                type='email'
                                className='form-control'
                                name='ename'
                                placeholder='ename'
                            />
                        </div>

                        <button className="btn">
                            <div>
                                {/* <img src='' alt='' height="15px" width="15px"/> */}
                                <span>Reset Password</span>
                            </div>
                        </button>
                        <div className="forgot">
                            <Link to='/login'>Back to Login Page</Link>
                        </div>
                        <div className="social">
                            <img src={mdk} alt='madaki logo' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
        <Footer />
    </>
  )
}

export default ForgotPassword