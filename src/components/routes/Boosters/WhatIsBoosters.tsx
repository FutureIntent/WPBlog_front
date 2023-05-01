import { graphql, useStaticQuery } from 'gatsby';

import WhatIsBlock from '@components/organisms/WhatIsBlock/WhatIsBlock';

const query = graphql`
    query boosterWhatIs {
        whatIsBooster: file(relativePath: { eq: "Products/product_booster.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WhatIsBoosters = () => {
    const { whatIsBooster } = useStaticQuery(query);

    return <WhatIsBlock product={whatIsBooster.childImageSharp.gatsbyImageData} />;
};

export default WhatIsBoosters;
