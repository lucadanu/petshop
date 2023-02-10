import { Link } from "react-router-dom";
import { IAnimal } from "../../../model/animal";
import { AnimalCardDetail } from "./animal-card-detail";

type Props = {
  animal: IAnimal;
  handleAnimal: (id: number) => void;
  isActive: boolean;
};

export const AnimalCard = (props: Props) => {
  const { animal, handleAnimal, isActive } = props;

  return (
    <div className={`animal-card ${isActive ? "active" : ""}`}>
      <div className="preview">
        <img src={animal.imgUrl} alt="" />

        <h2>{animal.name}</h2>

        <Link to={`${animal.id}`} className="link" state={animal}>
          Dettaglio
        </Link>
      </div>

      {isActive && <AnimalCardDetail animal={props.animal} />}
    </div>
  );
};
