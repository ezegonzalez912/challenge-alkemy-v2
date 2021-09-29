import { Hero } from "../../types/interfaces";
import { ModalHeroStatItem } from "./ModalHeroStatItem";

interface Props {
    hero: Hero | null,
    isChangeModal: () => void
}

export const ModalHero: React.FC<Props> = ({hero, isChangeModal}) => {

    const handleModalDialogClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    }

    return (
        <div className="modal__container" onClick={handleModalDialogClick}>
            {
                (hero !== null) &&
                <>
                <img src={hero.image.url} alt={hero.name}/>
                <div className="moda__info">
                    <h3>{hero.biography["full-name"]}</h3>
                    <p className="fw-400 c-primary">{hero.biography.aliases}</p>
                    <ModalHeroStatItem title={"Weight"} value={hero.appearance.weight[1]}/>
                    <ModalHeroStatItem title={"Height"} value={hero.appearance.height[1]}/>
                    <ModalHeroStatItem title={"Eyes"} value={hero.appearance["eye-color"]}/>
                    <ModalHeroStatItem title={"Hair"} value={hero.appearance["hair-color"]}/>
                    <ModalHeroStatItem title={"Work"} value={hero.work.occupation}/>
                    <button className="btn-primary" onClick={isChangeModal}>Cerrar</button>
                </div>
                </>
            }
        </div>
    )
}