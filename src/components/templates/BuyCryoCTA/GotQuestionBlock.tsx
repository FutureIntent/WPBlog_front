import routeMap from '@utils/routeMap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

import PaperPlane from '@components/molecules/Icons/PaperPlane';

const GotQuestionWrapper = styled.div`
    padding: 1.875rem 0 0;
    position: relative;
    width: 100%;

    &::before {
        background-color: var(--grey-lt);
        content: '';
        width: 100%;
        left: 0;
        position: absolute;
        top: -1px;
        height: 2px;
    }

    ${mediaQueries.tablet} {
        padding: 0 0 0 1.875rem;
        width: 50%;

        &::before {
            background-color: var(--grey-lt);
            content: '';
            height: 100%;
            left: -1px;
            position: absolute;
            top: 0;
            width: 2px;
        }
    }
`;

const GotQuestionBlock = () => {
    const { t } = useTranslation();

    return (
        <GotQuestionWrapper>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                height="100%"
            >
                <div>
                    <Typography variant="caption" color="var(--blue-dim)">
                        {t('gotQuestions')}
                    </Typography>
                    <Typography variant="h2" color="var(--black-brand)" mb="2.5rem">
                        {t('feelFreeToCallUs')}
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <LinkWithArrow
                            label={t('buyToday.browseFaq')}
                            to={routeMap.info.faq}
                            mb="0.75rem"
                        />
                    </Box>
                </div>
                <div>
                    <Typography
                        variant="caption"
                        color="var(--grey-dark)"
                        textAlign="center"
                        mb="1rem"
                    >
                        {t('buyToday.or')}
                    </Typography>
                    <Button as="a" variant="secondary" withIcon href="/contacts">
                        <Typography variant="accent" color="var(--blue-brand)" mr="0.5rem">
                            {t('buyToday.sendQuestion')}
                        </Typography>
                        <PaperPlane />
                    </Button>
                </div>
            </Box>
        </GotQuestionWrapper>
    );
};

export default GotQuestionBlock;
