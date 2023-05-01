import { useModal } from '@hooks';
import routeMap from '@utils/routeMap';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

import ImagesComposition from '@components/organisms/ServicesTabs/ImagesComposition';
import { ServiceTabContainer } from '@components/organisms/ServicesTabs/index';

interface IServiceTab {
    title: string;
    headline: string;
    description: string;
    productName: string;
    productImg: IGatsbyImageData;
    background: any;
}

const ViewPriceLink = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;

    ${mediaQueries.tablet} {
        margin-left: 1.75rem;
        margin-top: 0;
    }
`;

const ServiceTab = ({
    title,
    headline,
    productName,
    description,
    productImg,
    background,
}: IServiceTab): ReactElement => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();
    const { openModal } = useModal(`get-started`);

    const handleClick = () => {
        openModal({ productImg, productName });
    };

    return (
        <ServiceTabContainer>
            <ImagesComposition key={title} product={productImg} bg={background} />
            <Box pl={{ _: 0, tablet: 60 }}>
                <Typography variant="caption" color="var(--blue-brand)" transformText="uppercase">
                    {title}
                </Typography>
                {gatsbyBreakpoints.tablet && <Typography variant="h2">{headline}</Typography>}
                <Typography variant="paragraph" mt="1rem" color="var(--black-brand)">
                    {description}
                </Typography>
                <Box display="flex" mt="1.75rem" flexDirection={{ _: 'column', tablet: 'row' }}>
                    <Button variant="primary" onClick={handleClick}>
                        <Typography variant="accent" color="var(--white)">
                            {t('getStarted')}
                        </Typography>
                    </Button>
                    <ViewPriceLink>
                        <LinkWithArrow label={t('viewPrices')} to={routeMap.services.prices} />
                    </ViewPriceLink>
                </Box>
            </Box>
        </ServiceTabContainer>
    );
};

export default ServiceTab;
