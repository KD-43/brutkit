import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './checkbox.scss';

function Input_Checkbox_Component ({ type = "checkbox", children, id, addClass, value, textColor, checkmarkColor }) {
    const baseClass = "checkbox";
    const mergeClasses = `${baseClass} ${addClass || ''}`.trim();
    let textColorClass;
    let checkmarkColorClass;

    const [ isChecked, setIsChecked ] = useState(false);
    const handleCheckboxChange = (event) => {
        const newCheckedState = event.target.checked;
        console.log("Checkbox clicked. New State: ", newCheckedState);
        setIsChecked(newCheckedState);
    }

    if (textColor) {
        switch (textColor) {
            case 'red':
                textColorClass = "text-red";
                break;
            case 'darkRed':
                textColorClass = "text-darkRed";
                break;
            case 'grey':
                textColorClass = "text-grey";
                break;
            case 'black':
                textColorClass = "text-black";
                break;
            case 'white':
                textColorClass = "text-white";
                break;
            default:
                textColorClass = "text-black";
                break;
        }
    }

    if (checkmarkColor) {
        switch (checkmarkColor) {
            case 'red':
                checkmarkColorClass = "checkmark-red";
                break;
            case 'darkRed':
                checkmarkColorClass = "checkmark-darkRed";
                break;
            case 'grey':
                checkmarkColorClass = "checkmark-grey";
                break;
            case 'black':
                checkmarkColorClass = "checkmark-black";
                break;
            case 'white':
                checkmarkColorClass = "checkmark-white";
                break;
            default:
                checkmarkColorClass = "checkmark";
                break;
        }
    }

    return (
        <ErrorBoundary fallbackRender={<div>Something went wrong</div>}>
        <>
            <label className={"form-control " + textColorClass}>{children}
                <input type={type} checked={isChecked} onChange={handleCheckboxChange} id={id} className={mergeClasses} value={value} />
                <span className={checkmarkColorClass}></span>
            </label>
        </>
        </ErrorBoundary>
    );
}

export default Input_Checkbox_Component