import './Input.scss';


const Input = () => {

    return (

        <div class="field">
            <label >URL <span>*</span></label>
            <div class="input-wrapper">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <input name='search' type="text" placeholder="Search" />
            </div>
        </div>

    )
};
export default Input;