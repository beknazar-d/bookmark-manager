// EditModal/EditModal.jsx
import { useState } from 'react';
import './editModal.scss';
import close from '../../assets/images/icon-close.svg';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard, addCardToEdit } from '../../store/slices/slice';

const EditModal = () => {

    const dispatch = useDispatch();
    const cardToEdit = useSelector(state => state.cards.cardToEdit);

    const [form, setForm] = useState({
            title: cardToEdit?.title || '',
            description: cardToEdit?.description || '',
            url: cardToEdit?.url || '',
            tags: cardToEdit?.tags?.join(', ') || '',
        });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!cardToEdit?.id) return;
        dispatch(updateCard({
            id: cardToEdit.id,
            updates: {
                title: form.title,
                url: form.url,
                description: form.description,
                tags: form.tags.split(',').map(tag => tag.trim()).filter(Boolean),
            }
        }));
        dispatch(addCardToEdit(null))
    };

    return (
        <div className={cardToEdit ? 'add-modal-wrapper' : 'edit-none'}>
            <div className={cardToEdit ? 'add-modal' : 'none'}>
                <header className='add-modal__header'>
                    <div>
                        <h1>Edit Bookmark</h1>
                        <p>Update your saved link details</p>
                    </div>
                    <button onClick={() => dispatch(addCardToEdit(null))}>
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
                    <Button variant={'secondary'} text={'Cancel'} iconNone={true} onClick={() => dispatch(addCardToEdit(null))} />
                    <Button variant={'primary'} text={'Save Changes'} iconNone={true} onClick={handleSubmit} />
                </section>
            </div>
        </div>
    );
};

export default EditModal;