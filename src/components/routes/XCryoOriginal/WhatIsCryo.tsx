import { graphql, useStaticQuery } from 'gatsby';

import WhatIsBlock from '@components/organisms/WhatIsBlock/WhatIsBlock';

const query = graphql`
    query whatIsCryo {
        product: file(relativePath: { eq: "Products/product_xcryo.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WhatIsCryo = () => {
    const { product } = useStaticQuery(query);

    return <WhatIsBlock product={product.childImageSharp.gatsbyImageData} />;
};

export default WhatIsCryo;
