import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const CryoAdvantageCold = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 40 80" {...rest}>
        <g>
            <circle cx="20" cy="60" r="10" />
            <path
                d="M35,46.8V15c0-8.3-6.7-15-15-15C11.7,0,5,6.7,5,15v31.8C1.8,50.4,0,55,0,59.9c-0.1,11,8.8,20.1,19.9,20.1H20
		c4.9,0,9.6-1.8,13.2-5C41.5,67.7,42.3,55.1,35,46.8z M20,72.5L20,72.5c-7-0.1-12.5-5.7-12.5-12.6c0-5.3,3-8.1,5-10.3V15
		c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5v34.6c2,2.2,5,5,5,10.4C32.5,66.9,26.9,72.5,20,72.5z"
            />
        </g>
    </Icon>
);

export default CryoAdvantageCold;
