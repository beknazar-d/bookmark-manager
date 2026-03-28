import styles from '../../styles/Button.module.scss';

const Button = ({ icon, variant, text,size,onClick, iconOnly, disabled }) => {

    const variantClasses = {
        primary: styles.primary_btn,
        secondary: styles.secondary_btn,
        destructive: styles.destructive_btn,
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.btns} ${variantClasses[variant]} ${styles[size]} `}
        >
            {iconOnly ? (
                icon
            ) : (
                <>
                    {icon && <img src={icon} alt="icon" />}
                    <span>{text}</span>
                    
                </>
            )}
        </button>
    );
};

export default Button;