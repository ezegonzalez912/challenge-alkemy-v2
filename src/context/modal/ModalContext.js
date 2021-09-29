import { createContext, useState } from "react";
import { useModal } from "../../hooks/useModal";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {

    const [isOpenModal, isChangeModal] = useModal()
    const [hero, setHero] = useState(null)

    const data = {
        isOpenModal,
        isChangeModal,
        hero,
        setHero
    }

    return (
        <ModalContext.Provider value={data}>
            {children}
        </ModalContext.Provider>
    )
}