import { graphql, useStaticQuery } from 'gatsby';

import BlockWithForm from '@components/templates/BlockWithForm';

const query = graphql`
    query gotQuestionImage {
        img: file(relativePath: { eq: "Boosters/booster_cta.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const GotQuestionForm = () => {
    const { img } = useStaticQuery(query);

    return (
        <section>
            <BlockWithForm image={img.childImageSharp.gatsbyImageData} />
        </section>
    );
};

export default GotQuestionForm;
