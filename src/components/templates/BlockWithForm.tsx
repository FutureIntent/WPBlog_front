import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Parallax } from 'react-scroll-parallax';

import Form from '@components/molecules/Form/Form';

import BlockWithBackground, { ContentSize } from '@components/templates/BlockWithBackground';

export interface BlockWithFormProps {
    image: IGatsbyImageData;
    flipped?: boolean;
}

const BlockWithForm = ({ image, flipped }: BlockWithFormProps) => (
    <BlockWithBackground image={image} flipped={flipped} size={ContentSize.wide}>
        <Parallax speed={-8}>
            <Form
                data-sal={flipped ? 'slide-right' : 'slide-left'}
                data-sal-easing="ease-out-quart"
                data-sal-duration={1000}
            />
        </Parallax>
    </BlockWithBackground>
);

export default BlockWithForm;
