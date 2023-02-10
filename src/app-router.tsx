import { Routes, Route } from "react-router-dom";
import { Homepage } from "./modules/pages/homepage/homepage";
import { NotFound } from "./modules/pages/not-found/not-found";
import { Animals } from "./modules/pages/animals/animals";
import { NewAnimal } from "./modules/pages/animals/new-animal";
import { AnimalCardDetail } from "./modules/pages/animals/animal-card-detail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/animals">
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/new" element={<NewAnimal />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};