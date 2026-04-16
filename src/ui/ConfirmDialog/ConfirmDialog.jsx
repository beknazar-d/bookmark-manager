import './ConfirmDialog.scss';
import Button from '../Button/Button';
import close from '../../assets/images/icon-close.svg';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../store/slices/slice';

const ConfirmDialog = ({isArchived,cardId,showDialog,onClose}) => {
    const dispatch = useDispatch();
    
    const handleUpdateCard = () => {
        dispatch(updateCard({
            id: cardId,
            updates: { isArchived: !isArchived }
        }));
        onClose();
    }
    return (
        <div className={showDialog?'dialog ':'dialog open'}>
            <div className='dialog__container'>
                <section className='dialog__header'>
                    <img className='dialog__close-icon' onClick={onClose} src={close} alt="close-icon" />
                    <h1 className='dialog__title'>{isArchived ? 'Unarchive bookmark?' : 'Archive bookmark?'}</h1>
                    <p className='dialog__description'>{isArchived ? 'Are you sure you want to unarchive this bookmark?' : 'Are you sure you want to archive this bookmark?'}</p>
                </section>
                <section className='dialog__actions'>
                    <Button onClick={onClose} text={'Cancel'} variant={'secondary'} />
                    <Button onClick={handleUpdateCard} text={isArchived ? 'Unarchive' : 'Archive'} variant={'primary'} />
                </section>
            </div>
        </div>
    )
};
export default ConfirmDialog;
