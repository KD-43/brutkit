import { ErrorBoundary } from 'react-error-boundary';
import './banner.scss'

function BannerComponent ({ isOpen, onClose, bannerType, textType, successText, warningText, failText }) {

    let successMessage = successText ? successText : "Success!";
    let warningMessage = warningText ? warningText : "Warning!";
    let failMessage = failText ? failText : "Fail!";

    if (!isOpen) {
        return null;
    }

    switch (bannerType) {
        case 'success':
            return (
                <ErrorBoundary fallback={<div>Error with "Success" banner!</div>}>
                    <div className="banner banner-success">
                        <p className="banner-text">{textType === 'success' && successText && (
                            successMessage
                        )}</p>
                        {onClose && (
                            <button className="banner-close-btn" onClick={onClose}>
                                x
                            </button>
                        )}
                    </div>
                </ErrorBoundary>
            );
        case 'warning':
            return (
                <ErrorBoundary fallback={<div>Error with "Warning" banner!</div>}>
                    <div className="banner banner-warning">
                        <p className="banner-text">{textType === 'warning' && warningText && (
                            warningMessage
                        )}</p>
                        {onClose && (
                            <button className="banner-close-btn" onClick={onClose}>
                                x
                            </button>
                        )}
                    </div>
                </ErrorBoundary>
            );
        case 'fail':
            return (
                <ErrorBoundary fallback={<div>Error with "Fail" banner!</div>}>
                    <div className="banner banner-fail">
                        <p className="banner-text">{textType === 'fail' && failText && (
                            failMessage
                        )}</p>
                        {onClose && (
                            <button className="banner-close-btn" onClick={onClose}>
                                x
                            </button>
                        )}
                    </div>
                </ErrorBoundary>
            );
    }
}

export default BannerComponent