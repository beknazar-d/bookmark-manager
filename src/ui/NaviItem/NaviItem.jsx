import'./NaviItem.scss';
import home from '../../assets/images/icon-home.svg';

const NaviItem =({number})=>{
    return(
        <>
        <div className='navi_btn'>
            <div className='navi_inner_section'>
            <img src={home} alt="haus-icon" />
            <span>Home</span>
            </div>
            <span className='navi_number'>{number}</span>
        </div>
        </>
    )
};

export default NaviItem;