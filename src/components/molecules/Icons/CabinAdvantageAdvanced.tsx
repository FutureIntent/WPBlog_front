import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const CabinAdvantageAdvanced = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 80 70" {...rest}>
        <g>
            <path
                d="M50,33.1l-7.8,15.5c-0.6,1.2-2.1,1.7-3.4,1.1c-0.5-0.3-0.9-0.7-1.2-1.2l-8.9-19.7L24.2,40H9.5L38,69.1
		c1.1,1.1,2.8,1.1,3.9,0.1c0,0,0.1-0.1,0.1-0.1L70.5,40h-17L50,33.1z"
            />
            <path
                d="M74,6.5l-0.4-0.4c-7.9-8.1-20.9-8.2-28.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3L40,10.6l-4.4-4.5C27.8-1.9,14.8-2.1,6.7,5.8
		C6.6,5.9,6.5,6,6.4,6.2L6,6.5C-1.5,14.4-2,26.6,4.8,35h16l5.6-13.5c0.5-1.3,2-1.9,3.3-1.4c0.6,0.2,1.1,0.7,1.3,1.3l9.1,20.2
		l7.7-15.3c0.6-1.2,2.1-1.7,3.4-1.1c0.5,0.2,0.9,0.6,1.1,1.1l4.3,8.6h18.6C82,26.6,81.5,14.4,74,6.5z"
            />
        </g>
    </Icon>
);

export default CabinAdvantageAdvanced;
