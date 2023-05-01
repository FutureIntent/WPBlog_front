import { useModal } from '@hooks';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Modal from '@components/molecules/Modal';

interface ITechSpecsModal {
    img: IGatsbyImageData;
    productName: string;
    specs: string[];
}

const ListItem = styled.li`
    padding: 10px 20px;
    position: relative;

    &:before {
        background-color: var(--blue-brand);
        border-radius: 50%;
        content: '';
        height: 6px;
        left: 0;
        margin-top: -3px;
        position: absolute;
        top: 50%;
        width: 6px;
    }
`;

const TechSpecsModal = ({ img, productName, specs }: ITechSpecsModal) => {
    const { tablet } = useBreakpoint();
    const { t } = useTranslation();
    const modalName = `tech-specs`;
    const { closeModal } = useModal(modalName);

    return (
        <Modal name={modalName} onClose={closeModal} size="medium">
            <Box display="flex" alignItems="center" pb="5rem">
                {tablet && (
                    <Box mr="4rem" backgroundColor="white" width="auto">
                        <GatsbyImage alt={productName} image={img} />
                    </Box>
                )}
                <Box maxWidth={{ _: 'auto', tablet: 400 }} width="100%">
                    <Typography variant="caption" color="var(--blue-brand)">
                        {t('technicalSpecification')}
                    </Typography>
                    <Typography variant="h2" color="var(--black-brand)" mb={10}>
                        {productName}
                    </Typography>
                    <ul>
                        {specs.map((spec) => (
                            <ListItem key={spec}>
                                <Typography variant="paragraph2">{spec}</Typography>
                            </ListItem>
                        ))}
                    </ul>
                </Box>
            </Box>
        </Modal>
    );
};

export default TechSpecsModal;
