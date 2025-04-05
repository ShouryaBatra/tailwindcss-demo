function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* hero section */}
      <section className="text-center py-16 bg-blue-100">
        <h2 className="text-3xl font-bold mb-4">Tailwind demo</h2>

        {/* styled button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Button 1
        </button>

        {/* CHALLENGE: style this button */}
        {/* (can take inspiration from first button ^^^^) */}
        {/* try making this button different from the first one */}
        <button className="ml-4 /* Add styling here */">Button 2</button>
      </section>

      {/* features section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">Pros</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* styled card */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h4 className="text-xl font-bold mb-2">Easy</h4>
            <p className="text-gray-600">
              Write CSS directly on your components with less writing
            </p>
          </div>

          {/* CHALLENGE: style this card */}
          <div className="bg-white /* Add padding and rounded corners */ text-center">
            <h4 className="text-xl font-bold mb-2">Awesome</h4>
            <p className="text-gray-600">Some text here cuz i need it</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
