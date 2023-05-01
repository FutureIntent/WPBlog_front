import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const SiteMapHeading = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 11 11" {...rest}>
        <circle cx="2" cy="2" r="2" fill="#4052F8"/>
        <circle cx="9" cy="2" r="2" fill="#4052F8"/>
        <circle cx="2" cy="9" r="2" fill="#4052F8"/>
        <circle cx="9" cy="9" r="2" fill="#4052F8"/>
    </Icon>
);

export default SiteMapHeading;
