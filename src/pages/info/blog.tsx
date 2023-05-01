import List from '@components/routes/Blog/List';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '@theme/SEO';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Dropdown, { DropdownItemProps } from '@components/atoms/Dropdown';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import ArrowDown from '@components/molecules/Icons/ArrowDown';

import Layout from '@components/templates/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query blogPage($language: String = " ") {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["blog", "commons"] } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        img: file(relativePath: { eq: "Faq/bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        allWpPosts {
            edges {
                node {
                    id,
                    slug,
                    title {
                        rendered
                    },
                    excerpt {
                        rendered
                    },
                    categories,
                    image_url,
                    link,
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
        allWpCategories {
            edges {
                node {
                    id,
                    name
                }
            }
        }
    }
`;

const ArrowIcon = (): ReactElement => <ArrowDown size="micro" color="inherit" />;

const Blog = ({ data, pageContext }: any) => {
    const { t } = useTranslation();
    const { img, allWpPosts, allWpCategories } = data;

    const [postCategories, setPostCategories] = useState<DropdownItemProps[]>([{ label: 'All', value: '1' }]);
    const [selectedCategory, setSelectedCategory] = useState<DropdownItemProps>({ label: 'All', value: '1' });
    const [categoryPosts, setCategoryPosts] = useState<any[]>([]);

    const handleCategorySelect = (category: DropdownItemProps | null) => {
        if (!category) return;
        setSelectedCategory(category);
    };

    useEffect(() => {
        const initialCategories = allWpCategories.edges.map((category: any, index: number): DropdownItemProps => {

        if(index === 0) setSelectedCategory({label: category.node.name, value: category.node.id});

        return {label: category.node.name, value: category.node.id};      
       });
       setPostCategories(initialCategories);

    }, []);

    useEffect(() => {
        const initialPosts = allWpPosts.edges.filter((post: any) => (post.node.categories.includes(parseInt(selectedCategory.value, 10))));
        setCategoryPosts(initialPosts);
    }, [selectedCategory]);

    return (
        <>
            <SEO>
                <meta name="robots" content="noindex, follow" />
            </SEO>
            <Layout pageContext={pageContext}>
                <Box as="section" position="relative" pb={120}>
                    <BackgroundImage
                        fixed
                        style={{ minHeight: '100vh' }}
                        imageData={img.childImageSharp.gatsbyImageData}
                        overlay="vertical"
                    >
                        <GridParent>
                            <GridChild
                                gridColumn={{
                                    _: 'span 12',
                                    laptop: '3/ span 8',
                                    desktop: '4/span 6',
                                }}
                            >
                                <Box
                                    display="flex"
                                    flexDirection={{ _: 'column', laptopS: 'row' }}
                                    justifyContent="space-between"
                                    mt={96}
                                    mb={50}
                                >
                                    <Typography variant="h2" color="var(--white)">
                                        {t('CRYO BLOGS')}
                                    </Typography>
                                    <Box width="50%">
                                        <Dropdown
                                            hasBorder
                                            isSearchable={false}
                                            onChange={handleCategorySelect}
                                            options={postCategories}
                                            selected={selectedCategory}
                                            label="Select category"
                                            name="category"
                                            components={{
                                                DropdownIndicator: ArrowIcon,
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <List initialPosts={categoryPosts} category={selectedCategory} />
                            </GridChild>
                        </GridParent>
                    </BackgroundImage>
                </Box>
            </Layout>
        </>
    );
};

export default Blog;
