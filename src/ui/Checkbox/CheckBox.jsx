
import './CheckBox.scss';
import check from '../../assets/images/icon-check.svg';
import { useState } from 'react';
const CheckBox=()=>{
    const [checked,setChecked]=useState(false);

    return(
        <div className='checkbox_custom'
        onClick={()=>setChecked(!checked)}
        >
            {checked?<img src={check} alt="check-icon" />:null}
        </div>
    )
};
export default CheckBox;