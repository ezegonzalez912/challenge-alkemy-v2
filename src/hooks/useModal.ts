import { useState } from 'react'

export const useModal = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const isChangeModal = () => setIsOpenModal(!isOpenModal);

    return [isOpenModal, isChangeModal]
}
