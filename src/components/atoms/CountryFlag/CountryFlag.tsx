import { localesMap } from '@utils/locale';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import FlagIcon from '@components/atoms/CountryFlag/FlagIcon';

const FlagWrapper = styled.div`
    flex-shrink: 0;
    height: 1rem;
    line-height: 1;
    width: 2rem;
    ${space};

    svg {
        fill: none;
        height: 100%;
        width: 100%;
    }
`;

interface CountryFlagProps extends SpaceProps {
    locale?: string;
    iso?: string;
}

const CountryFlag = ({ locale, iso, ...rest }: CountryFlagProps): ReactElement | null => {
    let countryCode = null;

    if (locale) {
        countryCode = localesMap[locale].flag;
    }

    if (iso) {
        countryCode = iso;
    }

    if (!countryCode) {
        return null;
    }

    return (
        <FlagWrapper {...rest}>
            <FlagIcon countryCode={countryCode} />
        </FlagWrapper>
    );
};

export default CountryFlag;
