import './spinner.scss'

function LoadingSpinnerComponent ({ isLoading }) {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="spinner-backdrop" role="status" aria-live="polite" aria-busy="true">
            <div className="spinner"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default LoadingSpinnerComponent