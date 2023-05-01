import Warranty from '@components/routes/Home/Support/Warranty';
import WeProvide from '@components/routes/Home/Support/WeProvide';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

const Container = styled.div`
    margin-top: 4.25rem;
    padding: 4.25rem 0;
`;

const Support = ({ center = false }: { center?: boolean }) => {
    const gatsbyBreakpoints = useBreakpoint();

    return (
        <section id="warranty&support">
            <Container>
                {!gatsbyBreakpoints.tablet && (
                    <GridParent noGutter as="div">
                        <GridChild gridColumn="span 12">
                            <Warranty center={center} />
                        </GridChild>
                    </GridParent>
                )}

                <div
                    data-sal="slide-right"
                    data-sal-easing="ease-out-quart"
                    data-sal-duration={300}
                >
                    <WeProvide center={center} />
                </div>

                {gatsbyBreakpoints.tablet && !gatsbyBreakpoints.laptopS && (
                    <GridParent>
                        <GridChild gridColumn="2/ span 10">
                            <Warranty center={center} offsetTop />
                        </GridChild>
                    </GridParent>
                )}
            </Container>
        </section>
    );
};

export default Support;
