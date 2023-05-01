import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import GradientBG from '@components/atoms/GradientBg';

const Slide = ({ poster, alt = '' }: { poster: IGatsbyImageData; alt?: string }) => (
    <GradientBG style={{ height: '100%' }}>
        <GatsbyImage style={{ height: '100%', width: '100%' }} image={poster} alt={alt} />
    </GradientBG>
);

export default Slide;
