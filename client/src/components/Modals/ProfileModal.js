import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modelOpen, setModalOpen }) {

    const theme = useMantineTheme()

    return (
        <>
            <Modal
                opened={modelOpen}
                onClose={() => setModalOpen(false)}
                overlayBlur={3}
                size={"55%"}
            >
                <form className='infoForm'>
                    <h3>Your Info</h3>
                    <div>
                        <input type="text" name='firstname' placeholder="First Name" className="infoInput" />
                        <input type="text" name='lastname' placeholder="Last Name" className="infoInput" />
                    </div>
                    <div>
                        <input type="text" name='workAt' placeholder="Works at" className="infoInput" />

                    </div>
                    <div>
                        <input type="text" name='livesIn' placeholder="Lives In" className="infoInput" />
                        <input type="text" name='country' placeholder="Country" className="infoInput" />
                    </div>
                    <div>
                        <input type="text" name='relationship' placeholder="Relationship Status" className="infoInput" />
                    </div>
                    <div>
                        Profile Image
                        <input type='file' name='profileImg' />
                        Cover Image
                        <input type='file' name='coverImg' />
                    </div>
                    <div>

                        <button type="submit" className="button info-button">Update</button>
                    </div>
                </form>
            </Modal>

        </>
    );
}

export default ProfileModal