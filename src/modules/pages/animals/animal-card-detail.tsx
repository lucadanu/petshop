import { IAnimal } from "../../../model/animal";

type Props = {
  animal: IAnimal;
};

export const AnimalCardDetail = (props: Props) => {
  const { animal } = props;

  return (
    <div className="detail">
      <div>
        Name: <b>{animal.name}</b>
      </div>
      <div>
        Type: <b>{animal.type}</b>
      </div>

    <button>Elimina</button>
 
    </div>
  );
};
