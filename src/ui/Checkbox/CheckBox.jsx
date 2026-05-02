
import './CheckBox.scss';
import check from '../../assets/images/icon-check.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveTags } from '../../store/slices/slice';
const CheckBox=({text})=>{
    const activeTags = useSelector(selectActiveTags);
    const [checked,setChecked]=useState(false);

    return(
        <div className='checkbox_custom'
        onClick={()=>setChecked(!checked)}
        >
                {activeTags.includes(text)?<img src={check} alt="check-icon" />:null}
        </div>
    )
};
export default CheckBox;