import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';

import { ContentCard } from '@components/molecules/ContentCard';

const query = graphql`
    query gainingBestResultsImage {
        bg: file(relativePath: { eq: "XTone/img/gaining.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const GainingBestResults = () => {
    const { t } = useTranslation();
    const { bg } = useStaticQuery(query);
    const { tablet } = useBreakpoint();
    const listItems = [
        {
            title: t('gainingResult.point1.title'),
            caption: t('gainingResult.point1.caption'),
        },
        {
            title: t('gainingResult.point2.title'),
            caption: t('gainingResult.point2.caption'),
        },
        {
            title: t('gainingResult.point3.title'),
            caption: t('gainingResult.point3.caption'),
        },
    ];

    return (
        <section>
            <BackgroundImage
                imageData={bg.childImageSharp.gatsbyImageData}
                style={{ minHeight: '460px' }}
                imgStyle={{
                    objectPosition: '87% top',
                }}
                contentStyles={!tablet ? { gridArea: '2 / 1' } : undefined}
            >
                <ContentCard
                    caption={t('gainingResult.caption')}
                    header={t('gainingResult.header')}
                    listItems={listItems}
                />
            </BackgroundImage>
        </section>
    );
};

export default GainingBestResults;
