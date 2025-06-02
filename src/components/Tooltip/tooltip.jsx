import React from 'react'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import './tooltip.scss'

function ToolTipComponent ({ children, content }) {
    const [ isVisible, setIsVisible ] = useState(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleFocus = () => setIsVisible(true);
    const handleBlur = () => setIsVisible(false);

    const childElement = React.Children.only(children);
    const triggerElement = React.cloneElement(childElement, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
    });

    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div className="tooltip-container">
        {triggerElement}
        {isVisible && (
            <div className="tooltip-content text-body">
                {content}
            </div>
        )}
        </div>
        </ErrorBoundary>
    )
}

export default ToolTipComponent