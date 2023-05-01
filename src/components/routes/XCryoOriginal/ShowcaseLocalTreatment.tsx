import Card from '@components/routes/XCryoOriginal/ShowcaseLocalTreatment/Card';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

const query = graphql`
    query localTreatmentShowCaseImages {
        knee: file(relativePath: { eq: "LocalTherapy/Treatment/knee_treatment@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        local: file(relativePath: { eq: "LocalTherapy/Treatment/local_treatment@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        elbow: file(relativePath: { eq: "LocalTherapy/Treatment/elbow_treatment@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        shoulder: file(
            relativePath: { eq: "LocalTherapy/Treatment/shoulder_area_treatment@2x.jpg" }
        ) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ShowcaseLocalTreatment = () => {
    const { t } = useTranslation();
    const { knee, local, elbow, shoulder } = useStaticQuery(query);

    return (
        <GridParent as="section" noGutter noGap pt="5.75rem">
            <GridChild gridColumn="span 6">
                <Card
                    imageData={knee.childImageSharp.gatsbyImageData}
                    title={t('showCaseTreatment.card1')}
                />
            </GridChild>
            <GridChild gridColumn="span 6">
                <Card
                    imageData={local.childImageSharp.gatsbyImageData}
                    title={t('showCaseTreatment.card2')}
                />
            </GridChild>
            <GridChild gridColumn="span 6">
                <Card
                    imageData={elbow.childImageSharp.gatsbyImageData}
                    title={t('showCaseTreatment.card3')}
                />
            </GridChild>
            <GridChild gridColumn="span 6">
                <Card
                    imageData={shoulder.childImageSharp.gatsbyImageData}
                    title={t('showCaseTreatment.card4')}
                />
            </GridChild>
        </GridParent>
    );
};

export default ShowcaseLocalTreatment;
