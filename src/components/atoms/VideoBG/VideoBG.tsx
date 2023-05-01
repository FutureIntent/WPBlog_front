import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface VideoAttrs {
    loop: boolean;
    autoPlay: boolean;
    muted: boolean;
    playsInline: boolean;
    ref: HTMLVideoElement;
}

const StyledVideo = styled.video.attrs(
    ({ loop = true, autoPlay = true, muted = true, playsInline = true, ref }: VideoAttrs) => ({
        loop,
        autoPlay,
        muted,
        playsInline,
        ref,
    }),
)``;

const bgStyles = {
    height: '100vh',
    width: '100vw',
    minHeight: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    objectFit: 'cover',
    zIndex: -1,
};

export const query = graphql`
    query placeholderVideo {
        placeholder: file(relativePath: { eq: "homePage/xcryo_cta_bg@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 768)
            }
        }
    }
`;

const VideoBG = ({ src, type }: { src: string; type: string }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const { placeholder } = useStaticQuery(query);

    useEffect(() => {
        if (videoRef?.current) {
            videoRef.current.defaultMuted = true;
        }
    }, [videoRef]);

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return (
            <GatsbyImage
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                style={bgStyles}
                alt="background image"
                image={placeholder.childImageSharp.gatsbyImageData}
            />
        );
    }

    return (
        <StyledVideo ref={videoRef} style={bgStyles}>
            <source src={src} type={type} />
            Your browser does not support HTML5 video.
        </StyledVideo>
    );
};

export default VideoBG;
