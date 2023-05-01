import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import { ContentWrapper, ListItem } from '@components/molecules/ContentCard';

type IListItem = {
    title: string;
    caption: string;
};

interface IContentCard {
    caption: string;
    header: string;
    listItems: IListItem[];
}

const ContentCard = ({ caption, header, listItems }: IContentCard) => {
    const { tablet } = useBreakpoint();

    return (
        <GridParent noGap noGutter style={{ height: '100%' }}>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '2/span 6' }}>
                <Box
                    display="flex"
                    height="100%"
                    alignItems="center"
                    px="15px"
                    pb={{ _: '0', tablet: '4.375rem', laptopS: '0' }}
                    pt={{ _: '-8rem', tablet: '26.25rem', laptopS: 'unset' }}
                    mt={{ _: '-8rem', tablet: '0' }}
                >
                    <ContentWrapper className={tablet ? 'backdrop-blur-dark' : ''}>
                        <Typography
                            variant="caption"
                            color={{ _: 'var(--blue-brand)', tablet: 'var(--white)' }}
                        >
                            {caption}
                        </Typography>
                        <Typography
                            variant="h1"
                            as="h2"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                            mb={{ _: '1.75rem', laptopS: '3rem' }}
                        >
                            {header}
                        </Typography>
                        <ul>
                            {listItems.map((item) => (
                                <ListItem key={item.title}>
                                    <Typography
                                        variant="h3"
                                        color={{
                                            _: 'var(--black-brand)',
                                            tablet: 'var(--white)',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        color={{
                                            _: 'var(--black-brand)',
                                            tablet: 'var(--white)',
                                        }}
                                    >
                                        {item.caption}
                                    </Typography>
                                </ListItem>
                            ))}
                        </ul>
                    </ContentWrapper>
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default ContentCard;
