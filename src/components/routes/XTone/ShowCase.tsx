import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import CryoAdvantageCold from '@components/molecules/Icons/CryoAdvantageCold';
import CryoAdvantageConnected from '@components/molecules/Icons/CryoAdvantageConnected';
import CryoAdvantageDesign from '@components/molecules/Icons/CryoAdvantageDesign';
import CryoAdvantageNitrogenFree from '@components/molecules/Icons/CryoAdvantageNitrogenFree';

import { Showcase } from '@components/organisms/ShowCase';

const query = graphql`
    query xtoneShowCaseImages {
        design: file(relativePath: { eq: "ShowCase/markets_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        time: file(relativePath: { eq: "ShowCase/xcryo_advantage_nitrogen-free.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        connectedImage: file(relativePath: { eq: "ShowCase/cabin_advantage_wireless.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        coldImage: file(relativePath: { eq: "ShowCase/universal_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ShowCase = () => {
    const { t } = useTranslation();
    const { design, time, connectedImage, coldImage } = useStaticQuery(query);
    const slides = [
        {
            poster: design.childImageSharp.gatsbyImageData,
            title: t('showCase.card1.title'),
            caption: t('showCase.card1.caption'),
            icon: <CryoAdvantageDesign size="xxxl" color="var(--white)" />,
        },
        {
            poster: time.childImageSharp.gatsbyImageData,
            title: t('showCase.card2.title'),
            caption: t('showCase.card2.caption'),
            icon: <CryoAdvantageNitrogenFree size="xxxl" color="var(--white)" />,
        },
        {
            poster: connectedImage.childImageSharp.gatsbyImageData,
            title: t('showCase.card3.title'),
            caption: t('showCase.card3.caption'),
            icon: <CryoAdvantageConnected size="xxxl" color="var(--white)" />,
        },
        {
            poster: coldImage.childImageSharp.gatsbyImageData,
            title: t('showCase.card4.title'),
            caption: t('showCase.card4.caption'),
            icon: <CryoAdvantageCold size="xxxl" color="var(--white)" />,
        },
    ];

    return <Showcase slides={slides} />;
};

export default ShowCase;
