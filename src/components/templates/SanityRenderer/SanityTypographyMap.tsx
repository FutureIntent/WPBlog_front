import PortableText from 'react-portable-text';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import { CardSize } from '@components/atoms/Card/Card';
import Typography, { Variant } from '@components/atoms/Typography';

import ImageRenderer from '@components/templates/SanityRenderer/ImageRenderer';

const styleToTypographyMap: {
    [key: string]: { as: string; variant: Variant; mb: string };
} = {
    normal: {
        as: 'p',
        variant: 'paragraph',
        mb: '2xl',
    },
    h1: {
        as: 'h1',
        variant: 'h1',
        mb: 'md',
    },
    h2: {
        as: 'h2',
        variant: 'h2',
        mb: 'md',
    },
    h3: {
        as: 'h3',
        variant: 'h3',
        mb: 'md',
    },
};

export const SanityH1 = ({ children }: any) => (
    <Typography color="var(--black-brand)" {...styleToTypographyMap.h1}>
        {children}
    </Typography>
);
export const SanityH2 = ({ children }: any) => (
    <Typography color="var(--black-brand)" {...styleToTypographyMap.h2}>
        {children}
    </Typography>
);
export const SanityH3 = ({ children }: any) => (
    <Typography color="var(--black-brand)" {...styleToTypographyMap.h3}>
        {children}
    </Typography>
);
export const SanityNormal = ({ children }: any) => (
    <Typography color="var(--black-brand)" {...styleToTypographyMap.normal}>
        {children}
    </Typography>
);

export const AuthorReference = ({ author }: any) => (
    <Card cardSize={CardSize.small} my="1rem">
        <AspectRatio ratio={16 / 9}>
            <img style={{ width: '100%' }} alt={author.image.alt} src={author.image.asset.url} />
        </AspectRatio>
        <Box p="0.75rem 1.75rem 1.25rem 1.75rem">
            <Typography variant="h3" color="var(--black-brand)" mb="1rem">
                {author.name}
            </Typography>
            <PortableText
                /* eslint-disable-next-line no-underscore-dangle */
                content={author.bio}
                serializers={{
                    mainImage: ImageRenderer,
                    h1: SanityH1,
                    h2: SanityH2,
                    h3: SanityH3,
                    normal: SanityNormal,
                    authorReference: AuthorReference,
                }}
            />
        </Box>
    </Card>
);
