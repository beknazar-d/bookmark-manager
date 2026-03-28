import './Card.scss';
import avatar from '../../assets/images/favicon-frontend-mentor.png';
import menuIcon from '../../assets/images/icon-menu-bookmark.svg'
import eye from '../../assets/images/icon-visit-count.svg';
import hour from '../../assets/images/icon-last-visited.svg';
import data from '../../assets/images/icon-created.svg';
import pin from '../../assets/images/icon-pin.svg';

const Card = ({icon,header,text,tags,website,visit,lastVisit,createdAt}) => {

    return (
        <div className='card'>
            <section className='card__header'>
                <img className='card__logo' src={avatar} alt="avatar" />
                <div className='card__info'>
                <span className='card__header__text'>{header?header:'Frontend Mentor'}</span>
                <span className='card__header__undertext'>{website?website:'frontendmentor.io'}</span>
                </div>
                <button className='card__btn'><img src={icon?icon: menuIcon} alt="menu-icon" /></button>
            </section>
            <hr />
            <section className='card__content'>
                <p>
                    {text?text:`Improve your front-end coding skills by building real projects.
                    Solve real-world HTML,
                    CSS and JavaScript
                    challenges whilst working to professional designs. `}
                </p>
                    <div >
                        <button className='card__content__btn'>practice</button>
                        <button className='card__content__btn'>Learning</button>
                        <button className='card__content__btn'>Community</button>
                    </div>
            </section>

            <section className='card__footer'>
                <div><img src={eye} alt="eye" /><span>{visit?visit:'47'}</span></div>
                <div><img src={hour} alt="hour" /> <span>{lastVisit?lastVisit:'23 Sep'}</span></div>
                <div><img src={data} alt="data" /><span>{createdAt?createdAt:'15 Jan'}</span></div>
                <img className='footer_img' src={pin} alt="pin" />
            </section>
        </div>
    )
};
export default Card;