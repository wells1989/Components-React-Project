import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal)
    }

    const actionBar = <div className="flex m-3 absolute bottom-5 m-2 justify-between"  >
                        <Button className="m-2" primary rounded onClick={handleClick}>I accept</Button>
                        <Button className="m-2" danger rounded onClick={handleClick}>I Decline</Button>
                    </div>

    const modal = <Modal onClose={handleClick}
        actionBar={actionBar}
        >
        <p>Please read and confirm the T + C before proceeding</p>
        </Modal>

    return (
    <div>
        <Button primary rounded onClick={handleClick}>Open Modal</Button>
        {showModal && modal} 
    </div>
    )
};

export default ModalPage;

