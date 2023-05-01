import { useModal } from '@hooks';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import GetStartedForm from '@components/molecules/GetStartedForm/GetStartedForm';
import Modal from '@components/molecules/Modal';

const LeaveApplicationModal = () => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();
    const modalName = 'leave-application';
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
                        {t('leaveApplication')}
                    </Typography>
                    <Typography variant="paragraph2" color="var(--grey-dark)" mt={15}>
                        {t('getStartedCaption')}
                    </Typography>

                    <GetStartedForm onFormSubmit={closeModal} />
                </Box>
            </Box>
        </Modal>
    );
};

export default LeaveApplicationModal;
