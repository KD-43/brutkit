import { useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './input.scss';

function Input_Text_Component ({ type = "text", id, addClass, placeholder, value, onChange }) {
    const baseClass = "input";
    const mergeClasses = `${baseClass} ${addClass || ''}`.trim();

    function handleChange (event) {
        onChange(event.target.value);
    };

    return (
        <ErrorBoundary fallbackRender={<div>Something went wrong</div>}>
        <>
            <input type={type} onChange={handleChange} id={id} className={mergeClasses} placeholder={placeholder} value={value}></input>
        </>
        </ErrorBoundary>
    );
}

export default Input_Text_Component