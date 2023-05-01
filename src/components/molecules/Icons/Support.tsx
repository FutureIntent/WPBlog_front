import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Support = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 40 45.7" {...rest}>
        <g>
            <path
                d="M4.3,20c0.8,0,1.4-0.6,1.4-1.4v-1.4C5.8,9.3,12.2,2.9,20.1,3C27.9,3,34.2,9.3,34.3,17.1v1.4c0,3.9-3.2,7.1-7.1,7.1h-2.9
		c0-1.6-1.3-2.9-2.9-2.9h-2.9c-1.6,0-2.9,1.3-2.9,2.9s1.3,2.9,2.9,2.9h8.6c5.5,0,10-4.5,10-10v-1.4C37.1,7.7,29.5,0,20,0
		C10.5,0,2.9,7.7,2.9,17.1v1.4C2.9,19.4,3.5,20,4.3,20z"
            />
            <path
                d="M18.6,20L18.6,20h2.9c2,0,3.9,1.1,4.9,2.9h0.8c2.4,0,4.3-1.9,4.3-4.3v-1.4c0-6.3-5.1-11.5-11.4-11.5S8.6,10.7,8.6,17
		c0,3.5,1.6,6.8,4.3,9c0-0.1,0-0.2,0-0.3C12.9,22.6,15.4,20,18.6,20z"
            />
            <path
                d="M28.6,31.4h-2.1c-4.1,1.9-8.9,1.9-13,0h-2.1C5.1,31.4,0,36.5,0,42.9c0,1.6,1.3,2.9,2.9,2.9h34.3c1.6,0,2.9-1.3,2.9-2.9
		C40,36.5,34.9,31.4,28.6,31.4z"
            />
        </g>
    </Icon>
);

export default Support;