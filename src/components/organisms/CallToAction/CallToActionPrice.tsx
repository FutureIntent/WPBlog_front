import React from 'react';
import styled from 'styled-components';

import { CallToAction } from '@components/organisms/CallToAction/index';

import { BuyCryoCTATemplateProps } from '@components/templates/BuyCryoCTA/BuyCryoCTATemplate';
import Card from '@components/templates/BuyCryoCTA/Card';
import GotQuestionBlock from '@components/templates/BuyCryoCTA/GotQuestionBlock';
import PriceBlock from '@components/templates/BuyCryoCTA/PriceBlock';

const StyledCard = styled(Card)`
    margin-left: 15px;
    margin-right: 15px;
    max-width: 745px;
    padding: 2.5rem 1.875rem 3.25rem;
    width: 100%;
`;

const CallToActionPrice = ({
    image,
    caption,
    price,
    disclaimer,
    flipped = false,
    productName,
    productImg,
}: BuyCryoCTATemplateProps) => (
    <CallToAction image={image} flipped={flipped}>
        <StyledCard>
            <PriceBlock
                productName={productName}
                caption={caption}
                price={price}
                disclaimer={disclaimer}
                productImg={productImg}
            />
            <GotQuestionBlock />
        </StyledCard>
    </CallToAction>
);

export default CallToActionPrice;
