interface Props {
    isOpenModal: Boolean,
    isChangeModal: () => void,
    children: JSX.Element
}

export const Modal: React.FC<Props> = ({isOpenModal, isChangeModal, children}) => {

    return (
        <div className={`modal__main ${isOpenModal && "modal__main-open"}`} onClick={isChangeModal}>
            {children}
        </div>
    )
}