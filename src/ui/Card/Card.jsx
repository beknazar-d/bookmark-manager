import './Card.scss';
import avatar from '../../assets/images/favicon-frontend-mentor.png';
import menuIcon from '../../assets/images/icon-menu-bookmark.svg'
import eye from '../../assets/images/icon-visit-count.svg';
import hour from '../../assets/images/icon-last-visited.svg';
import data from '../../assets/images/icon-created.svg';
import pin from '../../assets/images/icon-pin.svg';
import unpin from '../../assets/images/icon-unpin.svg';
import edit from '../../assets/images/icon-edit.svg';
import copy from '../../assets/images/icon-copy.svg';
import visit from '../../assets/images/icon-visit.svg';
import archive from '../../assets/images/icon-archive.svg';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
const Card = ({icon,favicon ,title,description,tags,url,visitCount,lastVisited,createdAt,isArchived,id,pinned}) => {
    const [isDialogOpen,setIsDialogOpen] = useState(false);
    const [isOpen,setIsOpen] = useState(false);

    const list =['visit', 'Copy URL',pinned?'Unpin':'Pin','Edit', isArchived ? 'Unarchive' : 'Archive'];
    const icons =[visit,copy,unpin,edit,archive];

    const cardsDropdown=(
        <div className={isOpen?'card-dropdown':'card-dropdown hide'}>
            <ul>
                {
                    list.map((item,i)=>{
                        return (
                            <Dropdown
                                setIsOpen={setIsOpen}
                                key={item+i}
                                icon={icons[i]}
                                id={id}
                                text={item}
                                onClick={item === 'Archive' || item === 'Unarchive' ? () => setIsDialogOpen(true) : null}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );

    return (
        <div className='card'>
            {cardsDropdown}
            <ConfirmDialog
                cardId={id}
                isArchived={isArchived}
                showDialog={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
            <section className='card__header'>
                <img className='card__logo' src={favicon?favicon:avatar} alt="avatar" />
                <div className='card__info'>
                <span className='card__header__text'> {title?title:'Frontend Mentor'}</span>
                <span className='card__header__undertext'>{url?url:'frontendmentor.io'}</span>
                </div>
                <button onClick={()=>setIsOpen(!isOpen)} className='card__btn'><img src={icon?icon: menuIcon} alt="menu-icon" /></button>
            </section>
            <hr />
            <section className='card__content'>
                <p>
                    {description?description:`Improve your front-end coding skills by building real projects.
                    Solve real-world HTML,
                    CSS and JavaScript
                    challenges whilst working to professional designs. `}
                </p>
                    <div >
                        {tags?.map((item, i) => {
                            return <button key={`${item}-${i}`} className='card__content__btn'>{item}</button>
                        })}
                    </div>
            </section>

            <section className='card__footer'>
                <div><img src={eye} alt="eye" /><span>{visitCount?visitCount:'47'}</span></div>
                <div><img src={hour} alt="hour" /> <span>{lastVisited?lastVisited:'23 Sep'}</span></div>
                <div><img src={data} alt="data" /><span>{createdAt?createdAt:'15 Jan'}</span></div>
                {pinned?<img className='footer_img' src={pin} alt="pin" />:null}
            </section>
        </div>
    )
};
export default Card;