import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import CabinAdvantageAdvanced from '@components/molecules/Icons/CabinAdvantageAdvanced';
import CabinAdvantageGas from '@components/molecules/Icons/CabinAdvantageGas';
import CabinAdvantagePatented from '@components/molecules/Icons/CabinAdvantagePatented';
import CabinAdvantageWireless from '@components/molecules/Icons/CabinAdvantageWireless';

import { Showcase } from '@components/organisms/ShowCase';

const query = graphql`
    query cabinShowCaseImages {
        patentedImage: file(relativePath: { eq: "Cabin/patented.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        gasImage: file(relativePath: { eq: "Cabin/gas.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        wirelessImage: file(relativePath: { eq: "Cabin/wireless.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        advancedImage: file(relativePath: { eq: "Cabin/advanced.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ShowCase = () => {
    const { t } = useTranslation();
    const { patentedImage, gasImage, wirelessImage, advancedImage } = useStaticQuery(query);
    const slides = [
        {
            poster: patentedImage.childImageSharp.gatsbyImageData,
            title: t('showCase.card1.title'),
            caption: t('showCase.card1.caption'),
            icon: <CabinAdvantagePatented size="xxxl" color="var(--white)" />,
        },
        {
            poster: gasImage.childImageSharp.gatsbyImageData,
            title: t('showCase.card2.title'),
            caption: t('showCase.card2.caption'),
            icon: <CabinAdvantageGas size="xxxl" color="var(--white)" />,
        },
        {
            poster: wirelessImage.childImageSharp.gatsbyImageData,
            title: t('showCase.card3.title'),
            caption: t('showCase.card3.caption'),
            icon: <CabinAdvantageWireless size="xxxl" color="var(--white)" />,
        },
        {
            poster: advancedImage.childImageSharp.gatsbyImageData,
            title: t('showCase.card4.title'),
            caption: t('showCase.card4.caption'),
            icon: <CabinAdvantageAdvanced size="xxxl" color="var(--white)" />,
        },
    ];

    return <Showcase slides={slides} />;
};

export default ShowCase;
