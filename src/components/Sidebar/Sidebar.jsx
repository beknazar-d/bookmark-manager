import './Sidebar.scss';
import NaviItem from '../../ui/NaviItem/NaviItem';
import logo from '../../assets/images/logo-light-theme.svg';
import darklogo from '../../assets/images/logo-dark-theme.svg';
import archive from '../../assets/images/icon-archive.svg';

const Sidebar=()=>{

    const listOfTags = ['Ai','Community','Compatibility','CSS','Design','Framework','Git','HTML','Javascript','Layout','Learning','Performance','Practice','Reference','Tips','Tools','Tutorial'];
    

    return (
        <div className='sidebar'>
            <header className='sidebar__header'>
                <img className='sidebar__logo' src={logo} alt="logo-icon" />
            </header>
            <section className='sidebar__selectors'>
            <NaviItem variant={'navi'}/>
            <NaviItem variant={'navi'} icon={archive}/>
            </section>
            <section className='sidebar__tags'>
            <span>TAGS</span>
            <ul>
                {
                    listOfTags.map((item,i)=>{
                        return <li><NaviItem key={i} variant={'navi'} checkbox={true} text={item} number={2} /></li>
                    })
                }
            </ul>
            </section>
        </div>
    )
};

export default Sidebar;