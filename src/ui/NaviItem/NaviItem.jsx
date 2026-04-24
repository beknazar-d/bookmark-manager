import './NaviItem.scss';
import home from '../../assets/images/icon-home.svg';
import check from '../../assets/images/icon-check.svg';
import close from '../../assets/images/icon-close.svg';
import CheckBox from '../Checkbox/CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSection, setActiveTag } from '../../store/slices/slice';
const NaviItem = ({ variant, number, onclick, icon, text }) => {
    const dispatch = useDispatch();
    const active = useSelector(state => state.cards.activeSelector);
    const Bookmarks = useSelector(state => state.cards.allCards);
    const isActive = active === text;



    const getTagCount = (bookmarks, targetTag) =>
        bookmarks.reduce((count, bookmark) => {
            return count + (bookmark.tags.includes(targetTag) ? 1 : 0);
        }, 0);

    const tagsCount = getTagCount(Bookmarks, text);

    const Toast = (
        <div className='toast' >
            <div className='toast_left'>
                <img className='toast_check' src={check} alt="check-icon" />
                <span>Bookmark added successfully.</span>
            </div>
            <img onClick={() => { onclick?.() }} className='toast_right' src={close} alt="close-icon" />
        </div>
    );

    const Navi = (
        <div onClick={() => {


            if (text === 'Home' || text === 'Archive') {
                dispatch(setActiveSection(text))
            }
        }} className={isActive ? 'navi_btn activated' : 'navi_btn'}>
            <div className='navi_inner_section'>
                <img src={icon ? icon : home} alt="house-icon" />
                <span>{text ? text : 'Home'}</span>
            </div>

        </div>
    );

    const tag = (
        <div className='tags' onClick={() => { dispatch(setActiveTag(text)) }}>
            <div className='tags__left'>
                <CheckBox text={text} />
                <span>{text ? text : 'AI'}</span>
            </div>
            <span className='tags__count'>
                {tagsCount === 0 ? 0 : tagsCount}
            </span>
        </div>
    );

    if (variant === 'toast') return Toast;
    if (variant === 'navi') return Navi;
    if (variant === 'tags') return tag;
};

export default NaviItem;