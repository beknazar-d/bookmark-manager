import { useState } from 'react';
import './addModal.scss';
import close from '../../assets/images/icon-close.svg';
import Button from '../Button/Button';
import { addCard } from '../../store/slices/slice';
import { useDispatch } from 'react-redux';

const AddModal = ({ showModal, setShowModal}) => {
    
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        title: '',
        description: '',
        url: '',
        tags: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const newBookmark = {
            id: `bm-${Date.now()}`,
            title: form.title,
            url: form.url,
            description: form.description,
            tags: form.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        };
        dispatch(addCard(newBookmark))
        setShowModal(false);
    };

    return (
        <div className={showModal ? 'add-modal-wrapper' : 'none'}>
            <div className={showModal ? 'add-modal' : 'none'}>
                <header className='add-modal__header'>
                    <div>
                        <h1>Add Bookmark</h1>
                        <p>Save a link with details to keep your collection</p>
                    </div>
                    <button onClick={() => setShowModal(false)}>
                        <img src={close} alt="close-icon" />
                    </button>
                </header>

                <form className='add-modal__form'>
                    <div>
                        <label htmlFor="title">Title*</label>
                        <input className='inputs title' id='title' name='title' type="text" value={form.title} onChange={handleChange} />
                    </div>
                    <div className='add-modal__description_wrapper'>
                        <label htmlFor="description">Description*</label>
                        <textarea maxLength={280} name="description" id="description" value={form.description} onChange={handleChange}></textarea>
                        <span>{form.description.length}/280</span>
                    </div>
                    <div>
                        <label htmlFor="url">Website URL*</label>
                        <input className='inputs website' id='url' name='url' type="text" value={form.url} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="tags">Tags*</label>
                        <input placeholder='e.g. design,learning,tools' className='inputs tags' id='tags' name='tags' type="text" value={form.tags} onChange={handleChange} />
                    </div>
                </form>

                <section className='add-modal__btns'>
                    <Button variant={'secondary'} text={'Cancel'} iconNone={true} onClick={() => setShowModal(false)} />
                    <Button variant={'primary'} text={'Add Bookmark'} iconNone={true} onClick={handleSubmit} />
                </section>
            </div>
        </div>
    );
};

export default AddModal;