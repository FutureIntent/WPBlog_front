import { useModal } from '@hooks';
import { ReactElement } from 'react';
import ReactPlayer from 'react-player';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';

import Modal from '@components/molecules/Modal';

interface IVideoPlayerModal {
    name: string;
    src: string;
}

export const VideoPlayerModal = ({ name, src }: IVideoPlayerModal): ReactElement => {
    const { closeModal } = useModal(name);

    return (
        <Modal name={name} onClose={closeModal} background="transparent">
            <AspectRatio ratio={16 / 9}>
                <Box backgroundColor="var(--black-brand)" width="100%" height="100%">
                    <ReactPlayer url={src} controls playing height="100%" width="100%" light />
                </Box>
            </AspectRatio>
        </Modal>
    );
};
