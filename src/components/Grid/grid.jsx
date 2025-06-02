import React from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import './grid.scss'

function Row ({ children, gap, columns, auto = 'no', addClass }) {
    const baseClass = "grid-row";
    const mergeClasses = `${baseClass} ${addClass || ''}`.trim();

    const gridTempCol = (col) => {
        const tempCol = {
            strict: col ? (typeof col === 'number' ? `repeat(${col}, 1fr)` : col) : 'repeat(12, 1fr)',
            auto: 'repeat(auto-fit, minmax(min(100%, var(--grid-min, 30ch)), 1fr))',
        }
        if (col && typeof col === 'number') {
            return tempCol.strict;
        } else if (auto === 'yes') {
            return tempCol.auto;
        } else {
            return 'repeat(12, 1fr)';
        }
    }

    const rowStyles = {
        display: 'grid',
        gap: gap ? `${gap}px` : '0px',
        gridTemplateColumns: gridTempCol(columns),
    }

    return (
        <ErrorBoundary fallback={<div>Error in Grid-row!</div>}>
            <div style={rowStyles} className={mergeClasses}>
                {children}
            </div>
        </ErrorBoundary>
    );
}

function Col ({ children, span, addClass, start, end }) {
    const baseClass = "grid-col";
    const mergeClasses = `${baseClass} ${addClass || ''}`.trim();

    let gridColValue = 'span 1';

    if (start !== undefined && end !== undefined) {
        gridColValue = `${start} / ${end}`;
    } else if (start !== undefined) {
        gridColValue = `${start}`;
    } else if (span !== undefined) {
        gridColValue = `span ${span}`;
    }

    const colStyles = {
        gridColumn: gridColValue,
    };

    return (
        <ErrorBoundary fallback={<div>Error in Grid-Col!</div>}>
            <div style={colStyles} className={mergeClasses}>
                {children}
            </div>
        </ErrorBoundary>
    );
}

const Grid = {
    Row,
    Col,
}

export default Grid