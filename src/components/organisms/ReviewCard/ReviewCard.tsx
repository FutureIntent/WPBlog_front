import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { ReactNode } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Typography from '@components/atoms/Typography';

import Facebook from '@components/molecules/Icons/Facebook';
import ReviewQuote from '@components/molecules/Icons/ReviewQuote';

const ReviewerAvatar = styled.div<{ flipped: boolean }>`
    max-width: 95px;
    position: absolute;
    top: 0;

    ${({ flipped }) => (flipped ? ` right: 0; ` : ` left: 0 `)};

    ${mediaQueries.tablet} {
        max-width: 40%;
    }
`;

const CardWrapper = styled.div`
    padding: 1rem 0 2rem 1rem;
    position: relative;

    ${mediaQueries.tablet} {
        padding: 2rem;
    }
`;

const QuoteIconWrapper = styled.div<{ flipped: boolean }>`
    position: absolute;
    right: 1.5rem;
    top: 6.5rem;
    z-index: -1;

    ${mediaQueries.tablet} {
        right: ${({ flipped }) => (flipped ? '11.5rem' : '2.5rem')};
        top: 2.5rem;
    }
`;

const AuthorInfoWrapper = styled.div<{ flipped: boolean }>`
    ${mediaQueries.tablet} {
        min-height: 9rem;
    }

    ${mediaQueries.laptopS} {
        min-height: unset;
    }

    ${({ flipped }) =>
        !flipped
            ? `
                padding: 1.5rem 0 0.5rem 6rem;
                
                ${mediaQueries.tablet} {
                    padding: 1.5rem 2.5rem 0.5rem 10rem;
                }
                
                ${mediaQueries.laptopS} {
                    padding: 1.5rem 2.5rem 0 10rem;
                }`
            : `
                padding: 1.5rem 6rem 0.5rem 0;
                
                ${mediaQueries.tablet} {
                    padding: 1.5rem 10rem 0.5rem 0;
                }
                
                ${mediaQueries.laptopS} {
                    padding: 1.5rem 10rem 0  0;
                }
            `}
`;

interface ReviewCardProps {
    authorImg: ReactNode;
    authorPosition: string;
    authorName: string;
    reviewText: string;
    flipped?: boolean;
}

const ReviewCard = ({
    authorImg,
    authorPosition,
    authorName,
    reviewText,
    flipped = false,
}: ReviewCardProps) => {
    const gatsbyBreakpoints = useBreakpoint();
    const fbIconOffsetRight = { _: 'unset', tablet: '2.5rem' };
    const fbIconOffsetLeft = { _: '1rem', tablet: 'unset' };
    const reviewTextPadding = flipped
        ? {
              _: '0',
              laptopS: '0 10rem 3rem 0',
          }
        : {
              _: '0',
              laptopS: '0 2.5rem 3rem 10rem',
          };

    return (
        <CardWrapper>
            <Card
                p={{
                    _: '0 1.5rem 4rem',
                    tablet: '2rem 2.3rem 5rem 2.2rem',
                    laptopS: '2rem 2.3rem 2rem 2.2rem',
                }}
            >
                <QuoteIconWrapper flipped={flipped}>
                    <ReviewQuote color="var(--grey-lt)" size="xxxl" />
                </QuoteIconWrapper>
                <Box
                    position="absolute"
                    bottom={{ _: '1rem', tablet: '1.5rem' }}
                    right={flipped ? fbIconOffsetLeft : fbIconOffsetRight}
                    left={flipped ? fbIconOffsetRight : fbIconOffsetLeft}
                >
                    <Facebook
                        size={gatsbyBreakpoints.tablet ? 'large3' : 'large'}
                        color="#1976D2"
                    />
                </Box>
                <Box maxWidth={{ _: '100%', tablet: '48rem' }}>
                    <AuthorInfoWrapper flipped={flipped}>
                        <Typography variant="caption" color="var(--blue-brand)">
                            {authorPosition}
                        </Typography>
                        <Typography
                            variant={{ _: 'h3', tablet: 'h2' }}
                            color="var(--black-brand)"
                            mb="1.1rem"
                        >
                            {authorName}
                        </Typography>
                    </AuthorInfoWrapper>
                    <Box p={reviewTextPadding}>
                        <Typography variant="paragraph" color="var(--black-brand)">
                            {reviewText}
                        </Typography>
                    </Box>
                </Box>
            </Card>
            <ReviewerAvatar flipped={flipped}>{authorImg}</ReviewerAvatar>
        </CardWrapper>
    );
};

export default ReviewCard;
