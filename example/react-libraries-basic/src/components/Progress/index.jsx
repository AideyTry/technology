import React, { FC, CSSProperties } from 'react'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface ProgressProps{
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: CSSProperties;
    theme?: ThemProps;
}

const Progress: FC<ProgressProps> = props => {
    const { percent, strokeHeight, showText, styles, theme } = props
    return(<div className="turnip-progress-bar" style={styles}>
        <div className="turnip-progress-bar-outer" style={{height: `${strokeHeight}px`}}>
            <div className={`turnip-progress-bar-inner color-${theme}`}
            style={{with: `${percent}%`}}
            >
                {showText && <span className="inner-text">{`${percent}%`}</span>}
            </div>
        </div>
    </div>)
}

Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: 'primary'
}

export default Progress