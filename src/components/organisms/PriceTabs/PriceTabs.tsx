import routeMap from '@utils/routeMap';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { config } from 'react-spring';
import useScrollTo from 'react-spring-scroll-to-hook';

import Box from '@components/atoms/Box';

import LeaveApplicationModal from '@components/organisms/Modals/LeaveApplicationModal';
import PriceTabsContainer from '@components/organisms/PriceTabs/PriceTabsContainer';
import PriceTabsHeading from '@components/organisms/PriceTabs/PriceTabsHeading';
import TabContent from '@components/organisms/PriceTabs/TabContent';

const query = graphql`
    query priceTabImages {
        xcryoTabImg: file(relativePath: { eq: "Products/product_xcryo.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        maskTabImg: file(relativePath: { eq: "Products/product_mask.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        xtoneTabImg: file(relativePath: { eq: "Products/product_xtone.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        cabinTabImg: file(relativePath: { eq: "Products/product_cryocabin.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        boostersTabImg: file(relativePath: { eq: "Products/product_booster.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        xcryoBackground: file(relativePath: { eq: "Prices/xcryo_original.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        xtoneBackground: file(relativePath: { eq: "Prices/xtone.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        cabinBackground: file(relativePath: { eq: "Prices/cabin.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        boostersBackground: file(relativePath: { eq: "Prices/boosters.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const PriceTabs = () => {
    const { t } = useTranslation();
    const [activeId, setActiveId] = useState('localTherapy');
    const {
        xcryoTabImg,
        maskTabImg,
        xtoneTabImg,
        cabinTabImg,
        boostersTabImg,
        xcryoBackground,
        xtoneBackground,
        cabinBackground,
        boostersBackground,
    } = useStaticQuery(query);
    const { scrollTo } = useScrollTo(config.molasses);
    const { laptopS } = useBreakpoint();

    const tabs = useMemo(
        () => [
            {
                key: t('localTherapy.title').replace(' ', '-'),
                title: t('localTherapy.title'),
                caption: t('products.localTherapy'),
                description: t('localTherapy.headline'),
                prices: [316, 450, 999],
                img: xcryoTabImg.childImageSharp.gatsbyImageData,
                bg: xcryoBackground.childImageSharp.gatsbyImageData,
                id: 'localTherapy',
                link: routeMap.cryotherapy.local,
                plus: {
                    key: t('faceTherapy.title').replace(' ', '-'),
                    title: t('faceTherapy.title'),
                    caption: t('products.faceTherapy'),
                    description: t('faceTherapy.headline'),
                    prices: [416, 450, 999],
                    img: maskTabImg.childImageSharp.gatsbyImageData,
                    bg: xtoneBackground.childImageSharp.gatsbyImageData,
                    id: 'faceTherapy',
                    link: routeMap.cryotherapy.face,
                },
            },
            {
                key: t('bodyTherapy.title').replace(' ', '-'),
                title: t('bodyTherapy.title'),
                caption: t('products.bodyTherapy'),
                description: t('bodyTherapy.headline'),
                prices: [516, 450, 999],
                img: xtoneTabImg.childImageSharp.gatsbyImageData,
                bg: xtoneBackground.childImageSharp.gatsbyImageData,
                id: 'bodyTherapy',
                link: routeMap.cryotherapy.body,
            },
            {
                key: t('fullBodyTherapy.title').replace(' ', '-'),
                title: t('fullBodyTherapy.title'),
                caption: t('products.fullBodyTherapy'),
                description: t('fullBodyTherapy.headline'),
                prices: [616, 450, 999],
                img: cabinTabImg.childImageSharp.gatsbyImageData,
                bg: cabinBackground.childImageSharp.gatsbyImageData,
                id: 'fullBodyTherapy',
                link: routeMap.cryotherapy.cabin,
            },
            {
                key: t('skinTherapy.title').replace(' ', '-'),
                title: t('skinTherapy.title'),
                caption: t('products.skinTherapy'),
                description: t('skinTherapy.headline'),
                prices: [716, 450, 999],
                img: boostersTabImg.childImageSharp.gatsbyImageData,
                bg: boostersBackground.childImageSharp.gatsbyImageData,
                id: 'skinTherapy',
                link: routeMap.cryotherapy.skin,
            },
        ],
        [],
    );

    if (typeof laptopS === 'undefined') return null;

    const handleClick = (id: string) => {
        scrollTo(`#${id}`, -300);
        setActiveId(id);
    };

    return (
        <Box display="flex" flexDirection={{ _: 'column', laptopS: 'row' }}>
            {!laptopS && (
                <Box pt={{ _: 'calc(var(--header-height) + 30px)', laptopS: 160 }}>
                    <PriceTabsHeading />
                </Box>
            )}
            <PriceTabsContainer tabs={tabs} activeId={activeId} handleClick={handleClick} />

            <Box gridTemplateColumns="repeat(10,1fr)" display="grid" width="100%">
                <TabContent tabs={tabs} />
            </Box>

            <LeaveApplicationModal />
        </Box>
    );
};

export default PriceTabs;
