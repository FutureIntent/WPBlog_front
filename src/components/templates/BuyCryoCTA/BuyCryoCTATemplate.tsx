import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactElement } from 'react';

import BlockWithBackground from '@components/templates/BlockWithBackground';
import Card from '@components/templates/BuyCryoCTA/Card';
import GotQuestionBlock from '@components/templates/BuyCryoCTA/GotQuestionBlock';
import PriceBlock from '@components/templates/BuyCryoCTA/PriceBlock';

export interface BuyCryoCTATemplateProps {
    image: IGatsbyImageData;
    caption: string;
    price: string;
    disclaimer?: string;
    flipped?: boolean;
    productName: string;
    productImg: IGatsbyImageData;
}

const BuyCryoCTATemplate = ({
    image,
    caption,
    price,
    disclaimer,
    flipped = false,
    productName,
    productImg,
}: BuyCryoCTATemplateProps): ReactElement => (
    <BlockWithBackground image={image} flipped={flipped}>
        <Card>
            <PriceBlock
                productName={productName}
                caption={caption}
                price={price}
                disclaimer={disclaimer}
                productImg={productImg}
            />
            <GotQuestionBlock />
        </Card>
    </BlockWithBackground>
);

export default BuyCryoCTATemplate;
