import { useEffect, useState} from 'react'
import './card.scss'

function CardComponent ({ onClick, color, addClassToBase, addClassToHeader, addClassToBody, addClassToFooter, title, children, footer  }) {

    const defaultClassBase = 'card';
    const defaultClassHeader = 'card-header';
    const defaultClassBody = 'card-body';
    const defaultClassFooter = 'card-footer';

    const cardBaseTheme = () => {

        switch (color) {
            case 'red':
                return 'bg-red text-grey';
            case 'darkRed':
                return 'bg-darkRed text-white';
            case 'grey':
                return 'bg-grey text-darkRed';
            case 'black':
                return 'bg-black text-white';
            case 'white':
                return 'bg-white text-black';
            default:
                return 'bg-red text-grey';
        }
    }

    const borderColor = (pos) => {
        if (pos === 'top' || pos === 'bottom') {
            switch (color) {
            case 'red':
                return `border_${pos}-grey`;
            case 'darkRed':
                return `border_${pos}-white`;
            case 'grey':
                return `border_${pos}-darkRed`;
            case 'black':
                return `border_${pos}-white`;
            case 'white':
                return `border_${pos}-black`;
            default:
                return `border_${pos}-grey`;
        }}
    }

    const combineClassBase = `${defaultClassBase} ${addClassToBase || ''} ${cardBaseTheme() || ''}`.trim();
    const combineClassHeader = `${defaultClassHeader} ${addClassToHeader || ''} ${borderColor('bottom') || ''}`.trim();
    const combineClassBody = `${defaultClassBody} ${addClassToBody || ''}`.trim();
    const combineClassFooter = `${defaultClassFooter} ${addClassToFooter || ''} ${borderColor('top') || ''}`.trim();

    useEffect(() => {
        const handleCardClick = (event) => {
            if (event.key === 'click') {
                onClick();
            }
        };

        if (onClick) {
            document.addEventListener('keydown', handleCardClick);
        };

        return () => {
            document.removeEventListener('keydown', handleCardClick);
        }

    }, [onClick]);

    return (
        <>
            <div className={combineClassBase} onClick={onClick}>
                <div className={combineClassHeader}>{title}</div>
                <div className="card-content">
                    <div className={combineClassBody}>{children}</div>
                </div>
                <div className={combineClassFooter}>{footer}</div>
            </div>
        </>
    )
}

export default CardComponent