import { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';
import mediaQueries from '@theme/configs/mediaQueries';
import Typography from '@components/atoms/Typography';

const Wrapper = styled.div`
    align-items: center;
    box-shadow: 0 0 20px #110d3e0d;
    display: flex;
    justify-content: flex-start;
    padding: 0.6125rem;

    ${mediaQueries.tablet} {
        justify-content: center;
        padding: 1.25rem 4rem 1.25rem 1.25rem;
    }
`;

const IconItem = ({ icon, text }: { icon: ReactElement; text: string }) => (
    <Wrapper>
        <div>
            {cloneElement(icon, { size: 'large2', color: 'var(--blue-brand)'})}
        </div>
        <Typography
            variant="accent"
            color="var(--black-brand)"
            fontSize={{ _: '15px', tablet: '18px' }}
            ml="0.7rem"
                >
            {text}
        </Typography>
    </Wrapper>
    );

export default IconItem;
