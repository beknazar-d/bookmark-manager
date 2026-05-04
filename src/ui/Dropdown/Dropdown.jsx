import './Dropdown.scss';
import link from '../../assets/images/link.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addCardToEdit, updateCard } from '../../store/slices/slice';
import { useEffect } from 'react';

const Dropdown = ({ text, url, icon, setIsOpen, onClick, id, dropdownRef,isArchived }) => {


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
    }, [dropdownRef, setIsOpen]);

    const handleVisit = () => {
        if (!url) return;
        const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
        window.open(normalizedUrl, '_blank', 'noopener,noreferrer');
    };

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
                if (text === 'visit') {
                    const now = new Date().toISOString();
                    dispatch(updateCard({
                        id,
                        updates: {
                            visitCount: (currentCard?.visitCount || 0) + 1,
                            lastVisited: now,
                            lastVisitedRaw: now
                        }
                    }))
                    handleVisit();
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