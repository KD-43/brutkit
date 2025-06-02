import { useEffect } from 'react'
import './modal.scss'

function ModalComponent ({ isOpen, onClose, children, title, footer, modalColor, borderColor, addClass }) {
    const baseClass = "modal";
    const mergeClasses = `${baseClass} ${addClass || ''}`.trim();
    const bgColor = `${modalColor || ''}`.trim();
    const borderColorClass = `${borderColor || ''}`.trim();
    
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };

    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        };
        
    };

    return (
        <div className={mergeClasses}>
            <div className="modal-backdrop" onClick={handleBackdropClick}>
                <div className={"modal-content " + bgColor}>
                    {title && (
                        <div className={"modal-header " + borderColorClass}>
                            <h2>{title}</h2>
                            <button 
                                className="modal-close-btn"
                                onClick={onClose}
                            >
                                <p>x</p>
                            </button>
                        </div>
                    )}
                    <div className="modal-body">
                        {children}
                    </div>
                    {footer && (
                        <div className={"modal-footer " + borderColorClass}>
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ModalComponent;