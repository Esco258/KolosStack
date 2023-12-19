import React, { useState, useEffect } from 'react';

const App = () => {
  // Stan do przechowywania danych produktów
  const [products, setProducts] = useState([]);

  // Efekt useEffect do wczytania danych przy inicjalizacji
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Wczytaj dane z pliku JSON (załóżmy, że plik jest w tej samej lokalizacji co komponent)
        const response = await fetch('products.json');
        const data = await response.json();

        // Ustaw dane w stanie
        setProducts(data);
      } catch (error) {
        console.error('Błąd podczas wczytywania danych z pliku JSON:', error);
      }
    };

    // Wywołaj funkcję wczytującą dane
    fetchProducts();
  }, []); // Pusta tablica zależności oznacza, że useEffect wykona się tylko raz, przy inicjalizacji komponentu

  return (
    <div>
      <h1>Sklep elektroniczny</h1>
      {/* Tutaj możesz wykorzystać dane produktów w swojej aplikacji */}
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          {/* Dodaj inne informacje o produkcie */}
        </div>
      ))}
    </div>
  );
};

export default App;
