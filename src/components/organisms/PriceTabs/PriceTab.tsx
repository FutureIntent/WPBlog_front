import { useModal } from '@hooks';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import breakpoints from '@theme/configs/breakpoints';
import mediaQueries from '@theme/configs/mediaQueries';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import ContentLayout from '@components/organisms/PriceTabs/ContentLayout';
import PlanTabs from '@components/organisms/PriceTabs/PlanTabs';
import { ITab } from '@components/organisms/PriceTabs/PriceTabsContainer';

interface XCryoPriceTabProps {
    name: string;
    title: string;
    description: string;
    prices: [number, number, number];
    link: string;
    backgroundImg: IGatsbyImageData;
    productImg: IGatsbyImageData;
    productName: string;
    plus?: ITab;
}

const Container = styled.div`
    border-radius: 4px;
    max-width: 900px;
    overflow: hidden;

    ${mediaQueries.laptopS} {
        margin-top: 40px;
    }

    @media all and (max-width: ${breakpoints.tablet}) {
        margin: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: ${({ theme }) => theme.shadows.card};
    }
`;

const ContentWrapper = ({ img, children }: { img: IGatsbyImageData; children: ReactElement }) => {
    const { tablet } = useBreakpoint();

    if (tablet) {
        return (
            <BackgroundImage imageData={img} overlay="horizontal">
                {children}
            </BackgroundImage>
        );
    }

    return (
        <>
            <GatsbyImage image={img} alt="Background" />
            {children}
        </>
    );
};

const PriceTab = ({
    name,
    title,
    description,
    prices,
    link,
    backgroundImg,
    productImg,
    productName,
    plus,
}: XCryoPriceTabProps) => {
    const { t } = useTranslation();
    const { openModal } = useModal(`leave-application`);

    const handleOpenModal = () => {
        openModal({
            productName,
            productImg,
        });
    };

    return (
        <Container>
            <ContentWrapper img={backgroundImg}>
                <Box
                    p={{ _: '1rem', tablet: '2.5rem' }}
                    width="100%"
                    display={{ _: 'block', tablet: 'flex' }}
                    justifyContent="space-between"
                >
                    <ContentLayout link={link} name={name} plus={plus}>
                        <Typography
                            variant="h2"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                            transformText="uppercase"
                            mb="0.9rem"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                            mb="1rem"
                        >
                            {description}
                        </Typography>
                        <PlanTabs prices={prices} />
                        <Button size="fullWidth" mt="1rem" onClick={handleOpenModal}>
                            <Typography variant="accent" color="var(--white)">
                                {t('leaveApplication')}
                            </Typography>
                        </Button>
                        <Typography
                            variant="caption"
                            color={{ _: 'var(--blue-brand)', tablet: 'var(--white)' }}
                            mt="1rem"
                            textAlign="center"
                        >
                            {t('includeAllApplicators')}
                        </Typography>
                    </ContentLayout>
                </Box>
            </ContentWrapper>
        </Container>
    );
};

export default PriceTab;
