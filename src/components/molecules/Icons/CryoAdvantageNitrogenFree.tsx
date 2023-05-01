import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const CryoAdvantageNitrogenFree = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 80 80" {...rest}>
        <path
            d="M79.6,28.4C79.6,28.4,79.6,28.4,79.6,28.4l-28-28c-0.5-0.5-1.4-0.5-1.9,0L44,6c-0.5,0.5-0.5,1.4,0,1.9l1.9,1.9L5.5,50.1
	C-1,56.5-2,67.1,3.9,74c6.2,7.2,17.1,8,24.3,1.8c0.3-0.3,0.6-0.5,0.9-0.8l41-41l1.9,1.9c0.5,0.5,1.4,0.5,1.9,0l5.7-5.7
	C80.1,29.7,80.1,28.9,79.6,28.4z M53,40H26.8l24.7-24.6l13.1,13.1L53,40z"
        />
    </Icon>
);

export default CryoAdvantageNitrogenFree;
