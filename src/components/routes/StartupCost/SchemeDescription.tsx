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
            <Typography variant="h2" color="var(--black-brand)" transformText="uppercase">
                {t('howWeWork.description.title')}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)">
                {t('howWeWork.description.caption')}
            </Typography>
            <ul>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('howWeWork.description.step1')}</Typography></StyledListItem>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('howWeWork.description.step2')}
                    </Typography>
                </StyledListItem>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('howWeWork.description.step3')}</Typography></StyledListItem>
                <StyledListItem>
                    <Typography variant="paragraph2">{t('howWeWork.description.step4')}</Typography></StyledListItem>
            </ul>
            <Typography variant="paragraph" color="var(--black-brand)">
                {t('howWeWork.description.conclusion')}
            </Typography>
        </Box>
    );
};

export default SchemeDescription;
