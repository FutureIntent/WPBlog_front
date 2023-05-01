import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';

import { ContentCard } from '@components/molecules/ContentCard';

const query = graphql`
    query ultimateEnhancementImages {
        bg: file(relativePath: { eq: "Cabin/ultimate_enhancement.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const MeetAllYourNeeds = () => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();
    const { bg } = useStaticQuery(query);
    const listItems = [
        {
            title: t(`ultimateEnhancement.point1.title`),
            caption: t(`ultimateEnhancement.point1.caption`),
        },
        {
            title: t(`ultimateEnhancement.point2.title`),
            caption: t(`ultimateEnhancement.point2.caption`),
        },
        {
            title: t(`ultimateEnhancement.point3.title`),
            caption: t(`ultimateEnhancement.point3.caption`),
        },
    ];

    return (
        <section>
            <BackgroundImage
                overlay="horizontal"
                imageData={bg.childImageSharp.gatsbyImageData}
                style={{ minHeight: '460px' }}
                imgStyle={{
                    objectPosition: '87% top',
                }}
                contentStyles={!tablet ? { gridArea: '2 / 1' } : undefined}
            >
                <ContentCard
                    caption={t('ultimateEnhancement.caption')}
                    header={t('ultimateEnhancement.heading')}
                    listItems={listItems}
                />
            </BackgroundImage>
        </section>
    );
};

export default MeetAllYourNeeds;
