import { Handle } from '@components/routes/XTone/BeforeAfterResult/Handle';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { ReactCompareSlider } from 'react-compare-slider';

const Compare = ({ before, after }: { before: IGatsbyImageData; after: IGatsbyImageData }) => (
    <ReactCompareSlider
        portrait
        style={{ height: '100%' }}
        handle={<Handle />}
        itemOne={
            <GatsbyImage style={{ width: '100%', height: '100%' }} image={before} alt="Before" />
        }
        itemTwo={
            <GatsbyImage style={{ width: '100%', height: '100%' }} image={after} alt="After" />
        }
    />
);

export default Compare;
