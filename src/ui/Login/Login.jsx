import './Login.scss';
import logo from '../../assets/images/logo-light-theme.svg';


const Login = () => {

    return (

        <div className='login'>
            <section className='login__header'>
                <img src={logo} alt="logo" />
                <h1>Log in your account</h1>
                <span>Welcome back! Please enter your details.</span>
            </section>
            <section className='login__inputs'>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                
            </section>
            <section className='login__footer'>
                <div>
                    <span>Forgot password?</span>
                    <button>Reset it</button>
                </div>
                <div>
                    <span>Don't have an account?</span>
                    <span>Sing up</span>
                </div>
            </section>
        </div>
    )
};

export default Login;