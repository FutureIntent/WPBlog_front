import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const MaskTutor3 = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 80 50" {...rest}>
        <path d="M0,0v50v0h80v0V0H0z M2,29h19v19H2V29z M29,29h49v19H29V29z M78,21H29V2h49V21z M2,2h19v19H2V2z" />
    </Icon>
);

export default MaskTutor3;
