import React from 'react';
import './Button.css'

const Button = ({children, type, disabled, onClick}) => {
    return (
        <button 
            className="customBtn"
            type={type || 'button'}
            disabled={disabled}
            onClick={onClick}
        >
            <span className="customBtn__content">
                { children }
            </span>
        </button>
    );
}

export default Button;
