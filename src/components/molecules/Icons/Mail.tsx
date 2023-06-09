import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Mail = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 52 39" {...rest}>
        <g>
            <path
                d="M1.1,3.2c7.1,6,19.7,16.7,23.3,20c0.8,0.9,2.2,0.9,3.1,0.1c0,0,0,0,0.1-0.1c3.7-3.3,16.2-14,23.3-20c0.4-0.4,0.5-1,0.2-1.5
		C50.3,0.6,49,0,47.7,0H4.3C3,0,1.7,0.6,0.9,1.7C0.6,2.1,0.6,2.8,1.1,3.2L1.1,3.2z"
            />
            <path
                d="M51.4,6.4c-0.4-0.2-0.8-0.1-1.2,0.2c-7.9,6.7-18,15.3-21.2,18.2c-1.7,1.6-4.4,1.6-6,0C19.6,21.7,8.2,12.1,1.8,6.6
		C1.3,6.2,0.6,6.3,0.3,6.7C0.1,6.9,0,7.2,0,7.4v27.2C0,37.1,1.9,39,4.3,39h43.3c2.4,0,4.3-1.9,4.3-4.3V7.4C52,7,51.8,6.6,51.4,6.4z"
            />
        </g>
    </Icon>
);

export default Mail;
