import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const StyledListItem = styled.li`
    margin: 1.5rem;
    position: relative;

    &:after {
        color: var(--blue-brand);
        content: '●';
        font-size: 24px;
        left: -1.5rem;
        line-height: 0.8;
        position: absolute;
        top: 0;
    }
`;

const SchemeDescription = () => {
    const { t } = useTranslation();

    return (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ _: '2rem', tablet: '4rem', laptopS: 0 }}
        >
            <Typography variant="h2" color="var(--black-brand)" transformText="uppercase" mb={20}>
                {t('warranty.title')}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)">
                {t('warranty.description.caption')}
            </Typography>
            <ul>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('warranty.description.step1')}</Typography></StyledListItem>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('warranty.description.step2')}
                    </Typography>
                </StyledListItem>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('warranty.description.step3')}</Typography></StyledListItem>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('warranty.description.step4')}</Typography></StyledListItem>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('warranty.description.step5')}</Typography></StyledListItem>
            </ul>
        </Box>
    );
};

export default SchemeDescription;
