import './Main.scss';
import add from '../../assets/images/icon-add.svg';
import avatar from '../../assets/images/image-avatar.webp';
import Input from '../../ui/input/Input';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import ProfileD from '../../ui/ProfileDropdown/ProfileDropdown';
import SDropdown from '../../ui/sortDropdown/SortDropdown';
import AddModal from '../../ui/addModal/addModal';
import { useState, useEffect } from 'react';
import { fetchCards } from '../../store/slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import { sortCards } from '../../store/slices/slice';
import switcher from '../../assets/switch-vertical.svg';
const Main = () => {

    const [show, setShow] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [showModal,setShowModal] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector(state => state.cards);
    const status = useSelector(state => state.cards.status);
    const error = useSelector(state => state.cards.error);
    const searchedItem = useSelector(state => state.cards.searchedItem);

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch])


    return (
        <div className='main-content'>
            <AddModal showModal={showModal} setShowModal={setShowModal}/>
            <ProfileD show={show} />
            <header className='main-content__header'>
                <Input />
                <div className='main-content__right'>
                    <Button onClick={()=>setShowModal(!showModal)} variant={'primary'} icon={add} text={'Add Bookmark'} />
                    <img onClick={() => setShow(!show)} className={show ? 'main-content__avatar active_profile' : 'main-content__avatar'} src={avatar} alt="avatar" />
                    
                </div>
            </header>
            <section className='main-content__underheader'>
                <span>{searchedItem?`Results for: "${searchedItem}"`:'All Bookmarks'}</span>
                <button onClick={()=>setShowSort(!showSort)}><img src={switcher} alt="switcher-icon" /> <span>Sort by</span></button>
                <SDropdown setShowSort={setShowSort} show={showSort}/>
            </section>
            <section className='main-content__cards'>
                {status === 'loading' && <p>Загрузка...</p>}
                {status === 'failed' && <p>Ошибка: {error}</p>}
                {status === 'succeeded' && (
    (data.filteredCards?.length > 0 ? data.filteredCards : data.cards)?.map((item) => (
        <Card key={item.id} {...item} />
    ))
)}
            </section>
        </div>
    )
};
export default Main;