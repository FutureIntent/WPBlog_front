import { useModal } from '@hooks';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import GetStartedForm from '@components/molecules/GetStartedForm/GetStartedForm';
import Modal from '@components/molecules/Modal';

const GetStartedModal = () => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();
    const modalName = 'get-started';
    const { closeModal, data } = useModal(modalName);

    if (!data) return null;

    const { productName, productImg } = data;

    return (
        <Modal name={modalName} onClose={closeModal} size="medium">
            <Box display="flex" alignItems="center">
                {tablet && (
                    <Box backgroundColor="white" mr="4rem" width="auto">
                        <GatsbyImage alt={productName} image={productImg} />
                    </Box>
                )}
                <Box maxWidth={400} width="100%">
                    <Typography variant="h3" color="var(--blue-brand)">
                        {productName} {t('order')}
                    </Typography>
                    <Typography variant="paragraph2" color="var(--grey-dark)" mt={15}>
                        {t('getStartedCaption')}
                    </Typography>
                    <GetStartedForm productName={productName} onFormSubmit={closeModal} />
                </Box>
            </Box>
        </Modal>
    );
};

export default GetStartedModal;
