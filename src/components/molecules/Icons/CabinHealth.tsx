import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const CabinHealth = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 80 64" {...rest}>
        <g>
            <path
                d="M79.5,48.8c-2.7-10.2-7-20-12.8-28.9c-2.8-4.3-4.5-7.9-10-7.9c-4.7-0.1-8.6,3.5-8.8,8.2v7.5L43.9,25
		c-0.6-0.4-0.9-1-0.9-1.7V2c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v21.3c0,0.7-0.3,1.3-0.9,1.7L32,27.7v-7.5c-0.2-4.7-4.1-8.4-8.8-8.2
		c-5.5,0-7.2,3.6-10,7.9c-5.7,8.9-10,18.7-12.8,28.9C0.2,50,0,51.2,0,52.5c0,7.7,7.8,13.2,15.7,11.1l7.4-2c5.1-1.2,8.8-5.8,8.9-11.1
		V39.5l-10.7,7.2c-0.5,0.3-1.1,0.2-1.4-0.3l-1.1-1.7c-0.3-0.5-0.2-1.1,0.3-1.4l20.9-14l20.9,14c0.5,0.3,0.6,0.9,0.3,1.4l-1.1,1.7
		c-0.3,0.5-0.9,0.6-1.4,0.3L48,39.5v10.9c0.1,5.3,3.8,9.8,8.9,11.1l7.4,2C72.2,65.7,80,60.1,80,52.5C80,51.2,79.8,50,79.5,48.8z"
            />
        </g>
    </Icon>
);

export default CabinHealth;
