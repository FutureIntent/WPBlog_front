import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const MaskTutor2 = ({ size, viewBox = '0 0 68.8 80', ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox={viewBox} {...rest}>
        <g>
            <path d="M7.2,68.6c0,2.3,1.9,4.2,4.2,4.2h25.1c2.3,0,4.2-1.9,4.2-4.2V67H7.2L7.2,68.6z" />
            <path
                d="M36.6,27.4H11.4c-2.3,0-4.2,1.9-4.2,4.2v33.8h33.5V31.6C40.8,29.3,38.9,27.4,36.6,27.4z M36.2,45.3c0,1-0.9,1.9-1.9,1.9h-8
		c-1,0-1.9-0.9-1.9-1.9v-11c0-1,0.9-1.9,1.9-1.9h8c1,0,1.9,0.9,1.9,1.9V45.3z"
            />
            <path
                d="M34.3,33.5h-8c-0.4,0-0.8,0.3-0.8,0.8v11c0,0.4,0.3,0.8,0.8,0.8h8c0.4,0,0.8-0.3,0.8-0.8v-11C35,33.9,34.7,33.5,34.3,33.5z
		 M33.9,44.6c0,0.2-0.2,0.4-0.4,0.4H27c-0.2,0-0.4-0.2-0.4-0.4V35c0-0.2,0.2-0.4,0.4-0.4h6.5c0.2,0,0.4,0.2,0.4,0.4V44.6z"
            />
            <path d="M12.8,74.3c-1.2,0-2.1,0.9-2.1,2.1v1.5c0,1.2,0.9,2.1,2.1,2.1c1.2,0,2.1-0.9,2.1-2.1v-1.5C14.9,75.2,13.9,74.3,12.8,74.3z" />
            <path d="M2.3,62.5C2.3,63.3,3,64,3.8,64c0.8,0,1.5-0.7,1.5-1.5V30.1h-3V62.5z" />
            <path d="M35.6,74.3c-1.2,0-2.1,0.9-2.1,2.1v1.5c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1v-1.5C37.7,75.2,36.8,74.3,35.6,74.3z" />
            <path
                d="M6.9,24H0.8C0.3,24,0,24.3,0,24.8l1.9,3.4C2.1,28.6,2.2,29,2.7,29h2.3c0.4,0,0.5-0.3,0.8-0.8l1.9-3.4
		C7.6,24.3,7.3,24,6.9,24z"
            />
            <path
                d="M66.8,16h-14V2c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v14h-14c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14v14c0,1.1,0.9,2,2,2h4
		c1.1,0,2-0.9,2-2V24h14c1.1,0,2-0.9,2-2v-4C68.8,16.9,67.9,16,66.8,16z"
            />
        </g>
    </Icon>
);

export default MaskTutor2;
