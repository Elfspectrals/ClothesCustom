import React, { useState } from 'react';
import Model from './clothes1/Scene';
import DiorBag from './clothes2/Scene';
import './App.css';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

const App = () => {
  // Étape 1: Définir l'état pour l'index du composant actuel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Étape 2: Créer un tableau de composants
  const components = [DiorBag, Model]; // Ajoutez d'autres composants ici

  // Étape 3: Gérer le clic sur les flèches
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  // Étape 4: Afficher le composant actuel
  const CurrentComponent = components[currentIndex];

  return (
    <div className="arrow-container">
      <CircleArrowLeft onClick={goToPrevious} />
      <CurrentComponent />
      <CircleArrowRight onClick={goToNext} />
    </div>
  );
};

export default App;