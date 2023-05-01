import { graphql, useStaticQuery } from 'gatsby';
import { ReactChild, ReactElement } from 'react';

import BackgroundImage from '@components/atoms/BackgroundImage';

const query = graphql`
    query cryotherapyBg {
        bg: file(relativePath: { eq: "homePage/cryotherapy/background.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 1835, height: 1124)
            }
        }
    }
`;

const CryoBackground = ({ children }: { children: ReactChild }): ReactElement | null => {
    const { bg } = useStaticQuery(query);

    return (
        <BackgroundImage imageData={bg.childImageSharp.gatsbyImageData}>{children}</BackgroundImage>
    );
};

export default CryoBackground;
