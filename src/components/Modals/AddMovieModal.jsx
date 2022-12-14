import Modal from "react-modal";

import AddMovieForm from "../Forms/AddMovieForm";
import { useEffect } from "react";
const AddMovieModal = ({
    isOpen,
    onClose,
    onSubmit,
    defaultFormValues,
    isEdit,
}) => {


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-black text-white w-full    h-fit lg:w-1/3  mx-auto  overflow-y-auto  rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm  "
            overlayClassName="fixed inset-0 bg-black/30 backdrop-filter backdrop-blur-sm z-20 overflow-y-auto"
        >
            <AddMovieForm
                onSubmit={onSubmit}
                defaultEditValues={defaultFormValues}
                isEdit={isEdit}
                closeModal={onClose}
            />
        </Modal>
    );
};

export default AddMovieModal;