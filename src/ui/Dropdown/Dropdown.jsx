import './Dropdown.scss';
import link from '../../assets/images/link.svg';
import { useDispatch } from 'react-redux';
import { addCardToEdit } from '../../store/slices/slice';

const Dropdown = ({text,icon,setIsOpen,onClick,id}) => {
    
    const dispatch = useDispatch();

    
    return(
        <div onClick={() => {
            if (typeof onClick === 'function') {
                onClick();
            }
            if(text==='Edit') {
                dispatch(addCardToEdit(id))
            }
            setIsOpen(false);
        }} className='dropdown'>
            <div className='dropdown_left'>
                <img src={icon?icon:link} alt="link-icon" />
                <span>{text}</span>
            </div>
            {/* <img src={check} alt="check-icon" /> */}

        </div>
    )
};
export default Dropdown;