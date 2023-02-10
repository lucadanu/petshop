import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../contants";
import { IAnimal } from "../../../model/animal";
import { AnimalCard } from "./animal-card";

export const Animals = () => {
  const [animalList, setAinimalList] = useState<IAnimal[] | null>(null);
  const [activeAnimal, setActiveAnimal] = useState<number | null>(null);

  const handleAnimal = (id: number) => {
    setActiveAnimal(id === activeAnimal ? null : id);
  };

  const fetchAnimal = async () => {
    const res = await axios.get(`${API_URL}/animal`);
    const data: IAnimal= res.data;
  };

  useEffect(() => {
    fetchAnimal();
  }, []);

  return (
    <div className="animals">
      <h1>Animals</h1>
      <div className="animals-list">
        {animalList?.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            handleAnimal={handleAnimal}
            isActive={animal.id === activeAnimal}
          />
        ))}
      </div>
    </div>
  );
};