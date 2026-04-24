import './Dropdown.scss';
import link from '../../assets/images/link.svg';
import { useDispatch,useSelector } from 'react-redux';
import { addCardToEdit,updateCard } from '../../store/slices/slice';

const Dropdown = ({text,icon,setIsOpen,onClick,id}) => {
    
    const dispatch = useDispatch();
    const currentCard = useSelector(state => 
        state.cards.allCards.find(card => card.id === id)
    );
    
    return(
        <div onClick={() => {
            if (typeof onClick === 'function') {
                onClick();
            }
            if(text==='Edit') {
                dispatch(addCardToEdit(id))
            }
            if(text === 'Pin' || text === 'Unpin') {
                dispatch(updateCard({ 
                    id, 
                    updates: { pinned: !currentCard.pinned } 
                }));
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