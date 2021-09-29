import { createContext, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Hero } from "../../types/interfaces";

interface Context {
    isOpenModal: Boolean,
    isChangeModal: () => void,
    hero: Hero | null,
    setHero: React.Dispatch<React.SetStateAction<Hero | null>>
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ModalContext = createContext({} as Context);

export const ModalProvider: React.FC<Props> = ({children}) => {

    const [isOpenModal, isChangeModal] = useModal()
    const [hero, setHero] = useState<Hero | null>(null)

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