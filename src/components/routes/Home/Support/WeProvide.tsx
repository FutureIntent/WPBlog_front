import IconItem from '@components/routes/Home/Support/IconItem';
import SupportBgImage from '@components/routes/Home/Support/SupportBgImage';
import Warranty from '@components/routes/Home/Support/Warranty';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import Manual from '@components/molecules/Icons/Manual';
import Service from '@components/molecules/Icons/Service';
import SupportIcon from '@components/molecules/Icons/Support';
import Tutorial from '@components/molecules/Icons/Tutorial';

const SupportCard = styled.div`
    background-color: var(--white);
    box-shadow: ${({ theme }) => theme.shadows.card};
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -2rem;
    padding: 1rem;
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.stepUp};

    ${mediaQueries.tablet} {
        margin-top: 0;
        padding: 2.5rem 1.75rem;
        width: 590px;
    }
`;

const WeProvide = ({ center = false }: { center: boolean }) => {
    const { t } = useTranslation();
    const { laptopS } = useBreakpoint();
    const listItems = [
        {
            icon: <Manual />,
            text: t('warranty.list.item1'),
        },
        {
            icon: <Tutorial />,
            text: t('warranty.list.item2'),
        },
        {
            icon: <Service />,
            text: t('warranty.list.item3'),
        },
        {
            icon: <SupportIcon />,
            text: t('warranty.list.item4'),
        },
    ];

    return (
        <GridParent noGutter>
            <GridChild
                gridColumn={{ _: 'span 12', tablet: '2/ span 10', laptopS: 'span 4' }}
                gridRow={{ _: 3, tablet: 1 }}
                m="auto 0"
            >
                <SupportCard
                    data-sal="slide-right"
                    data-sal-easing="ease-out-quart"
                    data-sal-delay={100}
                    data-sal-duration={1000}
                >
                    <Typography variant="accent" color="var(--blue-brand)">
                        {t(`warranty.titleRight`)}
                    </Typography>

                    <Box
                        display="grid"
                        gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
                        gridGap={{ _: '0.4rem', tablet: '1.25rem' }}
                        mt="0.7rem"
                    >
                        {listItems.map((item) => (
                            <IconItem key={item.text} {...item} />
                        ))}
                    </Box>
                </SupportCard>
            </GridChild>
            {laptopS && (
                <GridChild
                    gridColumn={{ _: 'span 12', tablet: '2/ span 10', laptopS: '3/ span 4' }}
                    gridRow={{ _: 1, tablet: 2, laptopS: 1 }}
                >
                    <Warranty center={center} />
                </GridChild>
            )}
            <SupportBgImage
                data-sal="slide-left"
                data-sal-easing="ease-out-quart"
                data-sal-duration={600}
            />
        </GridParent>
    );
};

export default WeProvide;
