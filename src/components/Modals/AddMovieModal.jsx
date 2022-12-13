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
            className="bg-black text-white absolute  w-full lg:w-1/3  h-auto mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm  "
            overlayClassName="fixed inset-0 bg-black/30 backdrop-filter backdrop-blur-sm z-20"
        >
            <AddMovieForm
                onSubmit={onSubmit}
                defaultEditValues={defaultFormValues}
                isEdit={isEdit}
            />
        </Modal>
    );
};

export default AddMovieModal;