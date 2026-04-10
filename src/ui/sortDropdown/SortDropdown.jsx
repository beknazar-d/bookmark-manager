import './SortDropdown.scss';
import check from '../../assets/images/icon-check.svg';
import { useSelector,useDispatch } from 'react-redux';
import { addSortName } from '../../store/slices/slice';
const SDropdown =({show})=> {

    const dispatch = useDispatch();
    const sort = useSelector(state=>state.cards.sortName);

    return(
        <div className={show?'sort-dropdown':'none'}>
            <ul>
                <li onClick={()=>{dispatch(addSortName('Recently added'))}} className='sort-dropdown__item'><span>Recently added</span>{sort==='Recently added'?<img src={check} alt='check-icon'/>:null}</li>
                <li onClick={()=>{dispatch(addSortName('Recently visited'))}} className='sort-dropdown__item'><span>Recently visited</span>{sort==='Recently visited'?<img src={check} alt='check-icon'/>:null}</li>
                <li onClick={()=>{dispatch(addSortName('Most visited'))}} className='sort-dropdown__item'><span>Most visited</span>{sort==='Most visited'?<img src={check} alt='check-icon'/>:null}</li>
            </ul>
        </div>
    )
};
export default SDropdown;