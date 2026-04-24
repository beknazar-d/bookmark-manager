
import './CheckBox.scss';
import check from '../../assets/images/icon-check.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveTag } from '../../store/slices/slice';
const CheckBox=({text})=>{
    const activeTag = useSelector(selectActiveTag)
    const [checked,setChecked]=useState(false);

    return(
        <div className='checkbox_custom'
        onClick={()=>setChecked(!checked)}
        >
            {activeTag===text?<img src={check} alt="check-icon" />:null}
        </div>
    )
};
export default CheckBox;