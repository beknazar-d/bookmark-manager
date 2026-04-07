import './Login.scss';
import logo from '../../assets/images/logo-light-theme.svg';
import darklogo from '../../assets/images/logo-dark-theme.svg';
import Button from '../Button/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login as loginAction, register as registerAction } from '../../store/slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [dark] = useState(document.documentElement.getAttribute('data-theme'));
    const [variant, setVariant] = useState('login');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(state=> state.auth.error);
    const user = useSelector(state=>state.user)
    console.log(user);
    
    const {
        register: registerLoginField,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors },
    } = useForm();

    const {
        register: registerSignupField,
        handleSubmit: handleSignupSubmit,
        formState: { errors: signupErrors },
    } = useForm();

    const onLogin = async (data) => {
    const result = await dispatch(loginAction(data));
    if (result.meta.requestStatus === 'fulfilled') {
        navigate('/home'); // было '/' → стало '/home'
    }
};

    const onRegister = async (data) => {
        const result = await dispatch(registerAction(data));
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/');
        }
    };

    const registerForm = (
        <div className='register-form'>
            <section className='register-form__header'>
                <img src={dark ? darklogo : logo} alt="logo" />
                <h3>Create your account</h3>
                <span>Join us and start saving your favorite links — organized, searchable, and always within reach.</span>
            </section>

            <section className='register-form__fields'>
                <div className='register-form__field'>
                    <label>Full name *</label>
                    <input
                        type="text"
                        placeholder='Your name'
                        {...registerSignupField('name', {
                            required: 'Full name is required',
                        })}
                    />
                    {signupErrors.name && <span className='field-error'>{signupErrors.name.message}</span>}
                </div>

                <div className='register-form__field'>
                    <label>Email address *</label>
                    <input
                        type="text"
                        placeholder='name@example.com'
                        {...registerSignupField('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email address',
                            },
                        })}
                    />
                    {signupErrors.email && <span className='field-error'>{signupErrors.email.message}</span>}
                </div>

                <div className='register-form__field'>
                    <label>Password *</label>
                    <input
                        type="password"
                        placeholder='Min 8 characters'
                        {...registerSignupField('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Must be at least 8 characters long',
                            },
                        })}
                    />
                    {signupErrors.password && <span className='field-error'>{signupErrors.password.message}</span>}
                </div>

                {error && <span className='field-error'>{error}</span>}

                <Button
                    size='large'
                    text={status === 'loading' ? 'Loading...' : 'Create account'}
                    variant='primary'
                    onClick={handleSignupSubmit(onRegister)}
                />
            </section>

            <section className='register-form__footer'>
                <div>
                    <span>Already have an account?</span>
                    <button type='button' onClick={() => setVariant('login')}>Log in</button>
                </div>
            </section>
        </div>
    );

    const loginForm = (
        <div className='login'>
            <section className='login__header'>
                <img src={dark ? darklogo : logo} alt="logo" />
                <h3>Log in your account</h3>
                <span>Welcome back! Please enter your details.</span>
            </section>

            <section className='login__inputs'>
                <div className='login__inputs__field'>
                    <label>Email</label>
                    <input
                        type="text"
                        {...registerLoginField('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email address',
                            },
                        })}
                    />
                    {loginErrors.email && <span className='field-error'>{loginErrors.email.message}</span>}
                </div>

                <div className='login__inputs__field'>
                    <label>Password</label>
                    <input
                        type="password"
                        {...registerLoginField('password', {
                            required: 'Password is required',
                        })}
                    />
                    {loginErrors.password && <span className='field-error'>{loginErrors.password.message}</span>}
                </div>

                {error && <span className='field-error'>{error}</span>}

                <Button
                    size='large'
                    variant='primary'
                    text={status === 'loading' ? 'Loading...' : 'Log in'}
                    onClick={handleLoginSubmit(onLogin)}
                />
            </section>

            <section className='login__footer'>
                <div>
                    <span>Forgot password?</span>
                    <button type='button'>Reset it</button>
                </div>
                <div>
                    <span>Don't have an account?</span>
                    <button type='button' onClick={() => {
                        setVariant('register')
                        }
                    }>Sign up</button>
                </div>
            </section>
        </div>
    );

    return variant === 'login' ? loginForm : registerForm;
};

export default Login;
