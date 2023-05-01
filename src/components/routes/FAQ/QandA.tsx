import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const StyledTab = styled(Tab)`
    color: var(--grey-dark);
    cursor: pointer;
    padding: 0 2rem 0 0;

    &:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }
`;

const StyledAccordion = styled(Accordion)`
    &.MuiPaper-root {
        background-color: transparent;
    }
`;

const FaqTab = ({ question, answer }: { question: string; answer: string }) => (
    <>
        <Typography variant="h3" color="var(--white)">
            {question}
        </Typography>
        <Typography variant="paragraph" color="var(--white)" marginTop="1.25rem">
            {answer}
        </Typography>
    </>
);

const QandA = () => {
    const gatsbyBreakpoints = useBreakpoint();
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = useState(0);
    const [expanded, setExpanded] = useState<string | false>('q1');

    const handleAccordionChange = (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleChange = (newValue: number) => {
        setTabIndex(newValue);
    };

    const faqs = [
        {
            key: 'q1',
            question: t('q1.q'),
            answer: t('q1.a'),
        },
        {
            key: 'q2',
            question: t('q2.q'),
            answer: t('q2.a'),
        },
        {
            key: 'q3',
            question: t('q3.q'),
            answer: t('q3.a'),
        },
        {
            key: 'q4',
            question: t('q4.q'),
            answer: t('q4.a'),
        },
    ];

    const getColor = (index: number) => (index === tabIndex ? 'var(--white)' : 'var(--grey-dark)');

    if (gatsbyBreakpoints.tablet) {
        return (
            <Box display="flex" width="100%" height="100%">
                <Tabs selectedIndex={tabIndex} onSelect={handleChange}>
                    <GridParent noGutter as="div" gridTemplateColumns="repeat(6, 1fr)">
                        <GridChild gridColumn="span 2">
                            <TabList>
                                {faqs.map((faq, index) => (
                                    <StyledTab key={faq.key}>
                                        <Typography variant="caption" color={getColor(index)}>
                                            {faq.question}
                                        </Typography>
                                    </StyledTab>
                                ))}
                            </TabList>
                        </GridChild>
                        <GridChild gridColumn="span 4">
                            <Box
                                pl="2.5rem"
                                display="flex"
                                flexDirection="column"
                                height="100%"
                                borderLeft="2px solid var(--grey-lt)"
                            >
                                {faqs.map((faq) => (
                                    <TabPanel key={faq.key}>
                                        <FaqTab question={faq.question} answer={faq.answer} />
                                    </TabPanel>
                                ))}
                            </Box>
                        </GridChild>
                    </GridParent>
                </Tabs>
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            width="100%"
            height="100%"
            flexDirection="column"
            pt={{ _: '2rem', tablet: 0 }}
            borderTop={{ _: '2px solid var(--white)', tablet: 0 }}
        >
            {faqs.map((faq) => (
                <StyledAccordion
                    key={faq.key}
                    square
                    elevation={0}
                    disableGutters
                    expanded={expanded === faq.key}
                    onChange={handleAccordionChange(faq.key)}
                >
                    <AccordionSummary aria-controls={`${faq.key}-content`} id={`${faq.key}-header`}>
                        <Typography
                            variant="accent"
                            color={expanded === faq.key ? 'var(--white)' : 'var(--grey-dark)'}
                        >
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="paragraph" color="var(--white)">
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>
            ))}
        </Box>
    );
};

export default QandA;
