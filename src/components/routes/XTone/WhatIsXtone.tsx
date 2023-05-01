import { graphql, useStaticQuery } from 'gatsby';

import WhatIsBlock from '@components/organisms/WhatIsBlock/WhatIsBlock';

const query = graphql`
    query xTone {
        xtone: file(relativePath: { eq: "Products/product_xtone.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WhatIsXtone = () => {
    const { xtone } = useStaticQuery(query);

    return <WhatIsBlock product={xtone.childImageSharp.gatsbyImageData} staticTitle={false} />;
};

export default WhatIsXtone;
