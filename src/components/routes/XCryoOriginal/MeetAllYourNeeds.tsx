import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';

import { ContentCard } from '@components/molecules/ContentCard';

const query = graphql`
    query meetAllYourNeedsImage {
        bg: file(relativePath: { eq: "LocalTherapy/meetYourNeeds.jpg" }) {
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
            title: t('meetAllYourNeeds.wellness.title'),
            caption: t('meetAllYourNeeds.wellness.caption'),
        },
        {
            title: t('meetAllYourNeeds.sport.title'),
            caption: t('meetAllYourNeeds.sport.caption'),
        },
        {
            title: t('meetAllYourNeeds.health.title'),
            caption: t('meetAllYourNeeds.health.caption'),
        },
    ];

    return (
        <section>
            <BackgroundImage
                style={{ minHeight: '460px' }}
                imgStyle={{
                    objectPosition: '87% top',
                }}
                imageData={bg.childImageSharp.gatsbyImageData}
                contentStyles={!tablet ? { gridArea: '2 / 1' } : undefined}
            >
                <ContentCard
                    caption={t('meetAllYourNeeds.preHeading')}
                    header={t('meetAllYourNeeds.heading')}
                    listItems={listItems}
                />
            </BackgroundImage>
        </section>
    );
};

export default MeetAllYourNeeds;
