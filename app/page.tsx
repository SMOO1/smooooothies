// app/page.tsx

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="text-center py-12">
        <h2 className="text-4xl font-semibold text-green-900 mb-4">About</h2>
        <div className="bg-green-200 p-6 rounded-lg shadow-lg inline-block">
          <p className="text-green-900">
            All things smoothie. Simply sharing some of my favorite smoothie recipes and information about various smoothie ingredients. All recipes are designed to be one serving!
          </p>
        </div>
      </section>
      <section className="text-center py-12">
        <h2 className="text-4xl font-semibold text-green-900 mb-4">Smoothie Categories</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Sweet</h3>
            <p>Key ingredients...</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Ultra healthy</h3>
            <p>Key ingredients...</p>
          </div>
        </div>
      </section>
      <section className="text-center py-12">
        <h2 className="text-4xl font-semibold text-green-900 mb-4">Strawberry-Banana</h2>
        <div className="bg-green-200 p-6 rounded-lg shadow-lg inline-block">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Ingredients:</h3>
          <ul className="list-disc text-left mx-auto w-1/2 text-green-900">
            <li className="mb-2">1 banana</li>
            <li className="mb-2">Two handfuls of strawberries</li>
            <li className="mb-2">1 cup vanilla yogurt</li>
            <li className="mb-2">1/2 liter cow milk 3.8% M.F.</li>
          </ul>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Additional Info</button>
        </div>
        <div className="mt-8">
          <img src="/bananastrawberrycup.png" alt="Smoothie" className="mx-auto rounded-lg shadow-lg w-0.25"/>
        </div>
      </section>
    </div>
  );
}
