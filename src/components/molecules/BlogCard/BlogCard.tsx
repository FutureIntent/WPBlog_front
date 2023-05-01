import Poster from '@components/routes/Blog/Poster';
import Heading from '@components/routes/Blog/components/Heading';
import PostCategory from '@components/routes/Blog/components/PostCategory';
import PostPreview from '@components/routes/Blog/components/PostPreview';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Typography from '@components/atoms/Typography';

import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';
import { stripHtml } from '@utils/helpers';

const StyledArrowBtn = styled(ArrowRightButton)`
    margin-left: 0.5rem;
    vertical-align: middle;
`;

// const StyledLink = styled(animated(Link))`
//     display: block;
//     will-change: transform, width, height, opacity;
// `;

const BlogCard = ({
    layout,
    link,
    category,
    title,
    excerpt,
    size,
    posterAspectRatio,
    featuredImage
}: any) => {
    const { t } = useTranslation();

    return (
        <a
            href={link}
            style={{height: '100%'}}
        >
            <Card cardSize={size} layout={layout} className="backdrop-blur-dark">
                <Poster title={title} featuredImage={featuredImage} posterAspectRatio={posterAspectRatio} />
                <Box p="15px 25px 40px" width="100%" height="100%">
                    <PostCategory category={category.label} />
                    <Heading heading={title.rendered} />
                    <PostPreview postPreview={stripHtml(excerpt.rendered)} />
                    <Typography variant="accent" color="var(--blue-brand)">
                        {t('ReadMore')} <StyledArrowBtn color="var(--blue-brand)" />
                    </Typography>
                </Box>
            </Card>
        </a>
    );
};

export default BlogCard;
