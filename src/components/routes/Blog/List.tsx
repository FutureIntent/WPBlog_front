import { useMedia } from '@hooks';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import { CardSize, CardLayout } from '@components/atoms/Card/Card';

import BlogCard from '@components/molecules/BlogCard';
import { BlogListInterface } from './types/listTypes';

const PostList = styled(Box)<{ columns: number }>`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    margin-top: 30px;
    overflow: hidden;
    position: relative;
    transition: height ease-in-out 0.5s;
    width: 100%;
`;

const List = ({ initialPosts, category }: BlogListInterface) => {
    const { tablet } = useBreakpoint();
    const columns = useMedia(
        [
            `(min-width: 2400px)`,
            `(min-width: 1820px)`,
            `(min-width: 1140px)`,
            `(min-width: 960px)`,
            `(min-width: 620px)`,
        ],
        [2, 2, 2, 2, 2],
        1,
    );
    const [posts, setPosts] = useState<{
        small: Record<string, any>[];
        big: Record<string, any> | null;
    }>({
        small: [],
        big: null,
    });

    useLayoutEffect(() => {
        if (tablet) {
            const [bigPost, ...smallPosts] = initialPosts.flat();
            setPosts({ small: smallPosts || [], big: bigPost || null });
        } else {
            setPosts({ small: initialPosts.flat() || [], big: null });
        }
    }, [initialPosts, tablet]);

    return (
        <>
            {posts.big && (
                <BlogCard
                    {...posts.big.node}              
                    posterAspectRatio={435 / 360}
                    size={CardSize.large}
                    layout={CardLayout.horizontal}
                    category={category}
                />
            )}
            <PostList columns={columns}>
                {posts.small.map((child: Record<string, any>) => (
                    <BlogCard
                        posterAspectRatio={280 / 180}
                        layout={CardLayout.vertical}
                        key={child.node.id}
                        {...child.node}
                        category={category}        
                        />
                    ))}
            </PostList>
        </>
    );
};

export default List;
