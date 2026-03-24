import'./NaviItem.scss';
import home from '../../assets/images/icon-home.svg';
import check from '../../assets/images/icon-check.svg';
import close from '../../assets/images/icon-close.svg';
import CheckBox from '../Checkbox/CheckBox';
const NaviItem =({variant,number,onclick,icon,text,checkbox})=>{

    const Toast = (
        <div className='toast'>
            <div className='toast_left'>
                <img className='toast_check' src={check} alt="check-icon" />
                <span>Bookmark added successfully.</span>
            </div>
            <img onClick={()=>{onclick()}} className='toast_right' src={close} alt="close-icon" />
        </div>
    );

    const Navi = (
            <div className='navi_btn'>
            <div className='navi_inner_section'>
            {checkbox?<CheckBox/>:<img src={icon?icon:home} alt="house-icon" />}
            <span>{text?text:'Home'}</span>
            </div>
            {number?<span className='navi_number'>{number}</span>:null}
        </div>
    );
    
    return(
        <>
        {
            variant==='toast'?Toast:Navi
        }
        </>
    )
};

export default NaviItem;