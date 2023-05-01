import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import BlockWithForm from '@components/templates/BlockWithForm';

const StyledSection = styled.section`
    padding-top: 8.5rem;
    position: relative;
`;

const query = graphql`
    query gotQuestion {
        img: file(relativePath: { eq: "homePage/xcryo_cta_bg@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 910, height: 696)
            }
        }
    }
`;

const GotQuestion = () => {
    const { img } = useStaticQuery(query);

    return (
        <StyledSection id="got-questions">
            <BlockWithForm image={img.childImageSharp.gatsbyImageData} />
        </StyledSection>
    );
};

export default GotQuestion;
