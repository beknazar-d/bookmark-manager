import './Main.scss';
import add from '../../assets/images/icon-add.svg';
import avatar from '../../assets/images/image-avatar.webp';
import Input from '../../ui/input/Input';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import switcher from '../../assets/switch-vertical.svg';
const Main = () => {
    return (
        <div className='main-content'>
            <header className='main-content__header'>
                <Input />
                <div className='main-content__right'>
                    <Button variant={'primary'} icon={add} text={'Add Bookmark'} />
                    <img className='main-content__avatar' src={avatar} alt="avatar" />
                </div>
            </header>
            <section className='main-content__underheader'>
                <span>All Bookmarks</span>
                <button><img src={switcher} alt="switcher-icon" /> <span>Sort by</span></button>
            </section>
            <section className='main-content__cards'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            </section>
        </div>
    )
};
export default Main;