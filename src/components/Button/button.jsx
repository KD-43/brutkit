import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './button.scss'

function ButtonComponent ({ children, size, color, addClass, addId, disabled = false, onTrigger, ...otherProps }) {
    const baseClass = "btn";
    const mergeClasses = `${baseClass} ${addClass || ''}`.trim();

    // let [ count, setCount ] = useState(0);

    // function handleClick () {
    //     setCount(count + 1);
    // }
    
    switch (size) {
        case 'sm':
            if (color == 'red') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'sm', color: 'Red'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-sm btn-red"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'darkRed') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'sm', color: 'DarkRed'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-sm btn-darkRed"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'grey') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'sm', color: 'Grey'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-sm btn-grey"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'black') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'sm', color: 'Black'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-sm btn-black"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'white') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'sm', color: 'White'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-sm btn-white"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            }
        case 'md':
            if (color == 'red') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'md', color: 'Red'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-md btn-red"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'darkRed') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'md', color: 'DarkRed'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-md btn-darkRed"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'grey') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'md', color: 'Grey'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-md btn-grey"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'black') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'md', color: 'Black'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-md btn-black"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'white') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'md', color: 'White'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-md btn-white"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            }
        case 'lg':
            if (color == 'red') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'lg', color: 'Red'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-lg btn-red"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'darkRed') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'lg', color: 'DarkRed'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-lg btn-darkRed"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'grey') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'lg', color: 'Grey'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-lg btn-grey"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'black') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'lg', color: 'Black'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-lg btn-black"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            } else if (color == 'white') {
                return (
                    <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'lg', color: 'White'</div>}>
                        <>
                            <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-lg btn-white"} id={addId} {...otherProps}>
                                <span className="btn-label">{children}</span>
                            </button>
                        </>
                    </ErrorBoundary>
                )
            }
        default:
            return (
                <ErrorBoundary fallbackRender={<div>Something went wrong with Btn 'lg', color: 'Red'</div>}>
                    <>
                        <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + " btn-red btn-sm"} id={addId} {...otherProps}>
                            <span className="btn-label">{children}</span>
                        </button>
                    </>
                </ErrorBoundary>
            );
    }
}

export default ButtonComponent