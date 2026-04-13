import './SortDropdown.scss';
import check from '../../assets/images/icon-check.svg';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSortName, sortCards } from '../../store/slices/slice';
const SDropdown = ({ show, setShowSort }) => {

    const dispatch = useDispatch();
    const sort = useSelector(state => state.cards.sortName);
    const allCards = useSelector(state => state.cards.allCards);

    useEffect(() => {
        dispatch(sortCards(allCards))

    }, [dispatch, sort])

    return (
        <div className={show ? 'sort-dropdown' : 'none'}>
            <ul>
                <li onClick={
                    () => {
                        dispatch(addSortName('recently_added'))
                        setShowSort(false)
                    }
                } name='recently_added' className='sort-dropdown__item'><span>Recently added</span>{sort === 'recently_added' ? <img src={check} alt='check-icon' /> : null}</li>
                <li onClick={() => {
                    dispatch(addSortName('recently_visited'))
                    setShowSort(false)
                }} name='recently_visited' className='sort-dropdown__item'><span>Recently visited</span>{sort === 'recently_visited' ? <img src={check} alt='check-icon' /> : null}</li>
                <li onClick={() => {
                    dispatch(addSortName('most_visited'))
                    setShowSort(false)
                }} name='most_visited' className='sort-dropdown__item'><span>Most visited</span>{sort === 'most_visited' ? <img src={check} alt='check-icon' /> : null}</li>
            </ul>
        </div>
    )
};
export default SDropdown;