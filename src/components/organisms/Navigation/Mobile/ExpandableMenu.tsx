import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useLocation } from '@reach/router';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Typography from '@components/atoms/Typography';

import ArrowDown from '@components/molecules/Icons/ArrowDown';

import type { Menu } from '@components/organisms/Navigation/Navigation';
import { MenuLinks, StyledLink } from '@components/organisms/Navigation/Navigation';

const StyledAccordion = styled(Accordion)`
    display: inline-flex !important;
    flex-direction: column;

    .MuiAccordionSummary-root {
        padding: 0;
        justify-content: flex-end;

        ${mediaQueries.tablet} {
            justify-content: flex-start;
        }

        .MuiAccordionSummary-content {
            margin: 0;
            flex-grow: 0;
        }
    }

    &::before {
        height: 0 !important;
    }
`;

const ExpandableMenu = ({ item, handleClose }: { item: MenuLinks; handleClose: () => void }) => {
    const location = useLocation();
    const { link, name, subMenu } = item;

    const isActive = location.pathname.includes(link);

    return (
        <StyledAccordion square elevation={0} disableGutters>
            <AccordionSummary
                expandIcon={<ArrowDown size="micro" color="var(--black-brand)" />}
                aria-controls={`${name}-content`}
                id={`${name}-header`}
            >
                <Typography
                    as="div"
                    variant="h3"
                    color={isActive ? 'var(--blue-brand)' : 'var(--black-brand)'}
                    hoverColor="var(--blue-brand)"
                    mb="unset"
                    transformText="uppercase"
                    mr="0.25rem"
                >
                    {name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {subMenu.map((submenu: Menu) => !submenu.isHidden && (
                    <StyledLink
                        key={submenu.name}
                        to={submenu.link}
                        activeClassName="active-link"
                        partiallyActive
                        onClick={handleClose}
                    >
                        <Typography
                            variant="paragraph"
                            color="var(--black-brand)"
                            hoverColor="var(--blue-brand)"
                            mb="unset"
                        >
                            {submenu.name}
                        </Typography>
                    </StyledLink>
                ))}
            </AccordionDetails>
        </StyledAccordion>
    );
};

export default ExpandableMenu;
