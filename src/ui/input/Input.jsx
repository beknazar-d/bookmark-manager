import './Input.scss';
import searchIcon from '../../assets/images/icon-search.svg';


const Input =()=>{

    return (

        <div className='input-field'>
            <div className='input-field__icon'>
                <img src={searchIcon} alt="search-icon" />
            </div>
        <input name='search-input' className='search_input' placeholder='Search'/>
        </div>

    )
};
export default Input;