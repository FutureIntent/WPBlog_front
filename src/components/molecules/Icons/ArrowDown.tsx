import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const ArrowDown = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 8 4" {...rest}>
        <path
            id="Path_37041"
            data-name="Path 37041"
            d="M-19966-21632h8l-4,4Z"
            transform="translate(19966 21632)"
        />
    </Icon>
);

export default ArrowDown;
