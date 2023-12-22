import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModal({ modelOpen, setModalOpen }) {

    const theme = useMantineTheme()

    return (
        <>
            <Modal
                opened={modelOpen}
                onClose={() => setModalOpen(false)}
                overlayBlur={3}
                size={"55%"}
            >
               <PostShare/>
            </Modal>

        </>
    );
}

export default ShareModal