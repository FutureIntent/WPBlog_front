import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import breakpoints from '@theme/configs/breakpoints';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

import { ITab } from '@components/organisms/PriceTabs/PriceTabsContainer';

const Wrapper = styled.div`
    @media all and (max-width: ${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ${mediaQueries.tablet} {
        width: 45%;
    }
`;

const NameTypography = ({ name }: { name: string }) => (
    <Typography
        variant="caption"
        color={{ _: 'var(--grey-dark)', tablet: 'var(--white)' }}
        transformText="uppercase"
        mb="0.3rem"
    >
        {name}
    </Typography>
);

const ContentLayout = ({
    link,
    name,
    plus,
    children,
}: {
    link: string;
    name: string;
    plus?: ITab;
    children: ReactElement[];
}) => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();

    return (
        <>
            <Wrapper>
                <NameTypography name={name} />
                {tablet && <>{children}</>}
            </Wrapper>
            {tablet ? (
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                    <LinkWithArrow
                        color={tablet ? 'var(--white)' : 'var(--blue-brand)'}
                        label={t('aboutDevice')}
                        to={link}
                    />
                    {plus && plus?.link && (
                        <LinkWithArrow
                            color={tablet ? 'var(--white)' : 'var(--blue-brand)'}
                            mt="0.8rem"
                            label={`${t('about')} ${t('faceTherapy.title')}`}
                            to={plus.link}
                        />
                    )}
                </Box>
            ) : (
                <>
                    {children}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="1.25rem"
                        mb="0.25rem"
                    >
                        <LinkWithArrow
                            color={tablet ? 'var(--white)' : 'var(--blue-brand)'}
                            label={t('aboutDevice')}
                            to={link}
                        />
                        {plus && plus?.link && (
                            <LinkWithArrow
                                color={tablet ? 'var(--white)' : 'var(--blue-brand)'}
                                mt="0.8rem"
                                label={`${t('about')} ${t('faceTherapy.title')}`}
                                to={plus.link}
                            />
                        )}
                    </Box>
                </>
            )}
        </>
    );
};

export default ContentLayout;
