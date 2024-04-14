import React from 'react'
import { IDefaultProps } from '../../types/components'

interface ITitleProps extends IDefaultProps {
    level?: number
}

export default function Title({level = 2, children}: ITitleProps) {
    let component;
    const titleClasses = '';
    switch (level) {
        case 1: {
            component = <h1 className={titleClasses}>{children}</h1>
            break;
        }
        case 2: {
            component = <h2 className={titleClasses}>{children}</h2>
            break;
        }
        case 3: {
            component = <h3 className={titleClasses}>{children}</h3>
            break;
        }
        case 4: {
            component = <h4 className={titleClasses}>{children}</h4>
            break;
        }
        case 5: {
            component = <h5 className={titleClasses}>{children}</h5>
            break;
        }
        case 6: {
            component = <h6 className={titleClasses}>{children}</h6>
            break;
        }
        default: {
            component = <h2 className={titleClasses}>{children}</h2>
            break;
        }
    }
    return component
}