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
                <li onClick={()=>{dispatch(addSortName('recently_added'))}} name='recently_added' className='sort-dropdown__item'><span>Recently added</span>{sort==='recently_added'?<img src={check} alt='check-icon'/>:null}</li>
                <li onClick={()=>{dispatch(addSortName('recently_visited'))}} name='recently_visited' className='sort-dropdown__item'><span>Recently visited</span>{sort==='recently_visited'?<img src={check} alt='check-icon'/>:null}</li>
                <li onClick={()=>{dispatch(addSortName('most_visited'))}} name='most_visited' className='sort-dropdown__item'><span>Most visited</span>{sort==='most_visited'?<img src={check} alt='check-icon'/>:null}</li>
            </ul>
        </div>
    )
};
export default SDropdown;