import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const CryoAdvantageConnected = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 80 56" {...rest}>
        <g>
            <circle cx="40" cy="48" r="8" />
            <path
                d="M65.3,29.6c-14.5-12.7-36.2-12.7-50.7,0c-0.8,0.7-0.9,2-0.2,2.8c0,0,0.1,0.1,0.1,0.1l4.3,4.2c0.8,0.7,2,0.8,2.8,0.1
		c10.6-9.1,26.1-9.1,36.7,0c0.8,0.7,2,0.6,2.8-0.1l4.3-4.2c0.8-0.8,0.8-2,0-2.8C65.4,29.6,65.4,29.6,65.3,29.6z"
            />
            <path
                d="M79.4,15.4C79.4,15.4,79.4,15.4,79.4,15.4C57.1-5.1,22.9-5.1,0.6,15.4c-0.8,0.7-0.9,2-0.1,2.8c0,0,0,0,0.1,0.1l4.3,4.2
		c0.8,0.8,2,0.8,2.8,0C26,5.8,54,5.8,72.3,22.5c0.8,0.7,2,0.7,2.8,0l4.3-4.2C80.2,17.5,80.2,16.2,79.4,15.4z"
            />
        </g>
    </Icon>
);

export default CryoAdvantageConnected;
