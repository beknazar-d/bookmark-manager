import './Dropdown.scss';
import link from '../../assets/images/link.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addCardToEdit, updateCard } from '../../store/slices/slice';
import { useEffect } from 'react';

const Dropdown = ({ text, icon, setIsOpen, onClick, id, dropdownRef }) => {


    const dispatch = useDispatch();
    const currentCard = useSelector(state =>
        state.cards.allCards.find(card => card.id === id)
    );


    useEffect(() => {
        const handleClickOutside = (event) => {
            
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            onClick={() => {
                if (typeof onClick === 'function') {
                    onClick();
                }
                if (text === 'Edit') {
                    dispatch(addCardToEdit(id))
                }
                if (text === 'Pin' || text === 'Unpin') {
                    dispatch(updateCard({
                        id,
                        updates: { pinned: !currentCard.pinned }
                    }));
                }

                setIsOpen(false);
            }} className='dropdown'>
            <div className='dropdown_left'>
                <img src={icon ? icon : link} alt="link-icon" />
                <span>{text}</span>
            </div>
            {/* <img src={check} alt="check-icon" /> */}

        </div>
    )
};
export default Dropdown;