import { useDispatch } from "react-redux";
import { deleteCard, updateCard } from "../../store/slices/slice";
import Button from '../Button/Button';
import close from '../../assets/images/icon-close.svg';
import './ConfirmDialog.scss';

const ConfirmDialog = ({ isArchived, cardId, showDialog, onClose, type = 'archive' }) => {
    const dispatch = useDispatch();

    const handleConfirm = () => {
        if (type === 'delete') {
            dispatch(deleteCard(cardId));
        } else {
            dispatch(updateCard({
                id: cardId,
                updates: { isArchived: !isArchived }
            }));
        }
        onClose();
    };

    const config = {
        archive: {
            title: isArchived ? 'Unarchive bookmark?' : 'Archive bookmark?',
            description: isArchived
                ? 'Are you sure you want to unarchive this bookmark?'
                : 'Are you sure you want to archive this bookmark?',
            confirmText: isArchived ? 'Unarchive' : 'Archive',
        },
        delete: {
            title: 'Delete bookmark?',
            description: 'Are you sure you want to delete this bookmark? This action cannot be undone.',
            confirmText: 'Delete',
        },
    };

    const { title, description, confirmText } = config[type];

    return (
        <div className={showDialog ? 'dialog' : 'dialog open'}>
            <div className='dialog__container'>
                <section className='dialog__header'>
                    <img className='dialog__close-icon' onClick={onClose} src={close} alt="close-icon" />
                    <h1 className='dialog__title'>{title}</h1>
                    <p className='dialog__description'>{description}</p>
                </section>
                <section className='dialog__actions'>
                    <Button onClick={onClose} text={'Cancel'} variant={'secondary'} />
                    <Button
                        onClick={handleConfirm}
                        text={confirmText}
                        variant={type === 'delete' ? 'destructive' : 'primary'}
                    />
                </section>
            </div>
        </div>
    );
};

export default ConfirmDialog;