import './Dropdown.scss';
import link from '../../assets/images/link.svg';
import check from '../../assets/images/icon-check.svg';

const Dropdown = ({text,icon}) => {
    
    return(
        <div className='dropdown'>
            <div className='dropdown_left'>
                <img src={icon?icon:link} alt="link-icon" />
                <span>{text}</span>
            </div>
            {/* <img src={check} alt="check-icon" /> */}
        </div>
    )
};
export default Dropdown;