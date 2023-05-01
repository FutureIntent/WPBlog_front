import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import ServiceTab from '@components/organisms/ServicesTabs/ServiceTab';

import Tabs from '../../molecules/Tabs/Tabs';

const query = graphql`
    query serviceTabsImg {
        xcryoTabImg: file(relativePath: { eq: "Products/product_xcryo.png" }) {
            childImageSharp {
                gatsbyImageData(width: 330, height: 480)
            }
        }
        maskTabImg: file(relativePath: { eq: "Products/product_mask.png" }) {
            childImageSharp {
                gatsbyImageData(width: 336, height: 380)
            }
        }
        xtoneTabImg: file(relativePath: { eq: "Products/product_xtone.png" }) {
            childImageSharp {
                gatsbyImageData(width: 336, height: 490)
            }
        }
        cabinTabImg: file(relativePath: { eq: "Products/product_cryocabin.png" }) {
            childImageSharp {
                gatsbyImageData(width: 336, height: 453)
            }
        }
        boostersTabImg: file(relativePath: { eq: "Products/product_booster.png" }) {
            childImageSharp {
                gatsbyImageData(width: 336, height: 254)
            }
        }
    }
`;

const ServicesTabs = () => {
    const { t } = useTranslation();
    const { xcryoTabImg, maskTabImg, xtoneTabImg, cabinTabImg, boostersTabImg } =
        useStaticQuery(query);

    const tabs = [
        {
            title: t('services.localTherapy.category'),
            caption: t('products.localTherapy'),
            description: t('services.localTherapy.description'),
            headline: t('services.localTherapy.headline'),
            img: xcryoTabImg.childImageSharp.gatsbyImageData,
            background: (
                <StaticImage
                    width={435}
                    height={678}
                    transformOptions={{
                        cropFocus: 'center',
                    }}
                    src="../../../../static/assets/homePage/services/cryo_knee.jpg"
                    alt="xcryo background"
                />
            ),
        },
        {
            title: t('services.faceTherapy.category'),
            caption: t('products.faceTherapy'),
            description: t('services.faceTherapy.description'),
            headline: t('services.faceTherapy.headline'),
            img: maskTabImg.childImageSharp.gatsbyImageData,
            background: (
                <StaticImage
                    width={435}
                    height={678}
                    transformOptions={{
                        cropFocus: 'center',
                    }}
                    src="../../../../static/assets/homePage/services/mask_bg.jpg"
                    alt="mask background"
                />
            ),
        },
        {
            title: t('services.bodyTherapy.category'),
            caption: t('products.bodyTherapy'),
            description: t('services.bodyTherapy.description'),
            headline: t('services.bodyTherapy.headline'),
            img: xtoneTabImg.childImageSharp.gatsbyImageData,
            background: (
                <StaticImage
                    width={435}
                    height={678}
                    transformOptions={{
                        cropFocus: 'center',
                    }}
                    src="../../../../static/assets/homePage/services/tone_bg.jpg"
                    alt="xTone background"
                />
            ),
        },
        {
            title: t('services.fullBodyTherapy.category'),
            caption: t('products.fullBodyTherapy'),
            description: t('services.fullBodyTherapy.description'),
            headline: t('services.fullBodyTherapy.headline'),
            img: cabinTabImg.childImageSharp.gatsbyImageData,
            background: (
                <StaticImage
                    width={435}
                    height={678}
                    transformOptions={{
                        cropFocus: 'center',
                    }}
                    src="../../../../static/assets/homePage/services/cabin_bg.jpg"
                    alt="cabin background"
                />
            ),
        },
        {
            title: t('services.skinTherapy.category'),
            caption: t('products.skinTherapy'),
            description: t('services.skinTherapy.description'),
            headline: t('services.skinTherapy.headline'),
            img: boostersTabImg.childImageSharp.gatsbyImageData,
            background: (
                <StaticImage
                    width={435}
                    height={678}
                    transformOptions={{
                        cropFocus: 'center',
                    }}
                    src="../../../../static/assets/homePage/services/booster_bg.jpg"
                    alt="booster background"
                />
            ),
        },
    ];

    return (
        <Tabs tabs={tabs} title={t('services.title')}>
            {tabs.map((tab) => (
                <ServiceTab
                    key={tab.title.replace(' ', '-')}
                    title={tab.title}
                    headline={tab.headline}
                    description={tab.description}
                    productImg={tab.img}
                    background={tab.background}
                    productName={tab.caption}
                />
            ))}
        </Tabs>
    );
};

export default ServicesTabs;
