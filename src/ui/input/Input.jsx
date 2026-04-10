import './Input.scss';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName,addSearchedItem } from '../../store/slices/slice';

const Input = () => {

    const dispatch=useDispatch();
    const [text,setText] = useState('');

    useEffect(()=>{

        dispatch(addSearchedItem(text))

    },[text,dispatch]);
    
    return (

        <div className="field">
            <div className="input-wrapper">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <input onChange={(e)=>{
                    setText(e.target.value)
                    dispatch(searchByName(e.target.value))
                    }} value={text} name='search' type="text" placeholder="Search" />
            </div>
        </div>

    )
};
export default Input;