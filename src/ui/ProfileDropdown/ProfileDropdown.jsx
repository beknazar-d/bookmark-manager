import './ProfileDropdown.scss';
import emily from '../../assets/images/image-avatar.webp';
import Toggle from '../Toggle/Toggle';
import theme from '../../assets/images/icon-theme.svg';
import logout from '../../assets/images/icon-logout.svg';

const ProfileD= ({avatar,email,name,surename,show=false}) =>{

    return (
        <div className={`profile ${show ? 'profile--show' : ''}`} > 
            <section className='profile__header'>
                <img src={avatar?avatar:emily} alt="person-photo" />
                <div>
                    <h3>{name?`${name} ${surename}`:'Emily Carter'}</h3>
                    <span>{email?email:'emily101@gmail.com'}</span>
                </div>
            </section>

            <section className='profile__theme'>
                <div className='profile__theme__left'>
                    <img src={theme} alt="theme" />
                    <span>Theme</span>
                </div>
                <div className='profile__theme__right'>
                    <Toggle/>
                </div>
            </section>

            <section className='profile__log'>
                <img src={logout} alt="logout-icon" />
                <span>Logout</span>
            </section>
        </div>
    )
};
export default ProfileD;