import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const AdvantageTools = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} {...rest}>
        <g>
            <path
                d="M27.5,41c-0.1-0.1-0.3-0.1-0.4-0.2c-8.8-5.3-11.7-16.7-6.4-25.5c3.4-5.6,9.4-9.1,16-9H56V2.3C56,1,55,0,53.7,0H14
		C6.3-0.1,0,6.1-0.1,13.9S6,27.9,13.8,28L0.9,50.2c-1.9,3.3-0.8,7.6,2.6,9.6c0,0,0,0,0,0l8.1,4.7c1.3,0.8,2.9,1.1,4.4,0.9L29.4,42
		C28.8,41.7,28.1,41.4,27.5,41z"
            />
            <path d="M61.3,67c2.6,0,4.7-2.1,4.7-4.7c0,0,0,0,0,0V46L53.9,67H61.3z" />
            <path
                d="M77.7,11H38c-7.7-0.1-14,6.1-14.1,13.9s6.1,14,13.9,14.1L24.9,61.1c-1.9,3.3-0.8,7.6,2.6,9.6c0,0,0,0,0,0l8.1,4.7
		c3.3,1.9,7.6,0.8,9.6-2.6c0,0,0,0,0,0L64.7,39h13c1.3,0,2.3-1,2.3-2.3V13.3C80,12,79,11,77.7,11z"
            />
        </g>
    </Icon>
);

export default AdvantageTools;
