import { graphql, useStaticQuery } from 'gatsby';

import WhatIsBlock from '@components/organisms/WhatIsBlock/WhatIsBlock';

const query = graphql`
    query whatIsCabin {
        product: file(relativePath: { eq: "Cabin/device_cryocabin.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WhatIsCryoCabin = () => {
    const { product } = useStaticQuery(query);

    return <WhatIsBlock product={product.childImageSharp.gatsbyImageData} />;
};

export default WhatIsCryoCabin;
