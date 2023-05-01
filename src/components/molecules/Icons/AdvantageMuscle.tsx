import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const AdvantageMuscle = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} {...rest}>
        <g>
            <path d="M20.9,34.7c1.3,0,2.3-1,2.3-2.3v-6.2c0-1.3-1.1-2.3-2.4-2.3c-1.3,0-2.3,1-2.3,2.3v6.2C18.5,33.6,19.6,34.7,20.9,34.7z" />
            <path
                d="M29.1,34.4c1.1,0.6,2.6,0.3,3.2-0.9l3.1-5.4c0.7-1.1,0.3-2.5-0.8-3.2c-1.1-0.7-2.5-0.3-3.2,0.8c0,0,0,0,0,0.1l-3.1,5.4
		C27.6,32.3,27.9,33.7,29.1,34.4z"
            />
            <path
                d="M9.5,33.5c0.6,1.1,2.1,1.5,3.2,0.9c1.1-0.6,1.5-2.1,0.9-3.2l-3.1-5.4c-0.7-1.1-2.1-1.5-3.2-0.8c-1.1,0.7-1.5,2-0.8,3.1
		L9.5,33.5z"
            />
            <path
                d="M78.4,20.8l-8.8-15C67.5,2.2,63.6,0,59.5,0H44.5c-3.9,0-7,3.1-7,7v9.4c0,1.9,0.7,3.7,2.1,5c1.4,1.3,3.2,2.1,5.1,2h4.6v-7.8
		h-2.3c-1.3,0-2.3-1-2.4-2.2c-0.1-1.3,0.9-2.4,2.2-2.5c0,0,0.1,0,0.1,0h4.7c1.3,0,2.3,1,2.3,2.3v0v10.2h1.6c1.3,0,2.3,1,2.3,2.3
		c0,0,0,0,0,0v22c-5.9-3.7-13.5-3.2-18.9,1.2c-4-6-10.8-9.7-18-9.7C9.4,39.4,0,48.7,0,60.2C0.1,71.1,9,80,20,80h24
		c12,0,23.9-2.8,34.7-8.1c0.8-0.4,1.3-1.2,1.3-2.1V26.8C80,24.7,79.4,22.6,78.4,20.8z"
            />
        </g>
    </Icon>
);

export default AdvantageMuscle;
