interface Props {
    title: string,
    value: string
}

export const ModalHeroStatItem:React.FC<Props> = ({title, value}) => {
    return (
        <p>{title}: 
            <span className="fw-400 c-primary">
                {value}
            </span>
        </p>
    )
}