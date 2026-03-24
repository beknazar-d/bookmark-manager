import './Toggle.scss';
import sun from '../../assets/images/icon-light-theme.svg';
import dark from '../../assets/images/icon-dark-theme.svg';
import { useState } from 'react';
const Toggle = () => {
    const [isDark, setIsDark] = useState(false);


    const toSwitch = (dark) => {
        setIsDark(dark);
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    };

    return (
        <div className='toggle_container'>
            <button onClick={() => { toSwitch(false) }} className='toggle_light'><img className={isDark ? 'white-icon' : null} src={sun} alt="sun-icon" /></button>
            <button onClick={() => { toSwitch(true) }} className='toggle_dark'><img className={isDark ? 'white-icon' : null} src={dark} alt="dark-icon" /></button>
        </div>
    )
};

export default Toggle;