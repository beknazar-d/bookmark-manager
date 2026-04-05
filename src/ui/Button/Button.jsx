import styles from '../../styles/Button.module.scss';

const Button = ({ icon, iconNone, variant, text, size, onClick, iconOnly, disabled }) => {

    const variantClasses = {
        primary: styles.primary_btn,
        secondary: styles.secondary_btn,
        destructive: styles.destructive_btn,
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.btns} ${variantClasses[variant]} ${styles[size]}`}
        >
            {
                iconNone ? (<><span>{text}</span></>) : (
                    iconOnly ? (
                        icon
                    ) : (
                        <>
                            {icon && <img className='btns__icon' src={icon} alt="icon" />}
                            <span>{text}</span>
                        </>
                    )
                )
            }
        </button>
    );
};

export default Button;