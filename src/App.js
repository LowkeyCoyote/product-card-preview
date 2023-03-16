import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <main>
      <Card
      subtitle="Perfume"
      title="Gabrielle Essence Eau De Parfum"
      description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the house CHANEL."
      soldedPrice="149.99"
      notSoldedPrice="169.99"
      />
      </main>
    </div>
  );
}

export default App;
