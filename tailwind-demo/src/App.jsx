import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg underline font-bold mt-4 text-blue-600">
        Tailwind make styling easy!
      </p>
      <div className="bg-gray-200 p-4 m-4">Back ground color</div>
      <div className=""></div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="bg-blue-200 p-4 m-4">1 </div>
        <div className="bg-blue-400 p-4 m-4">2</div>
        <div className="bg-blue-400 p-4 m-4">3</div>
      </div>
      <div className="flex justify-center items-center gap-4 h-20 bg-gray-300">
        <p className="text-xl font-bold"> text 1</p>
        <p className="text-xl font-bold">text 2</p>
        <p className="text-xl font-bold">text 3</p>
      </div>

      <table className="table-auto w-full border-collapse border mt-4 border-gray-300 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="bg-gray-200 text-gray-300 px-6 py-3 text-center">
              Song
            </th>
            <th className="bg-gray-200 text-gray-300 px-6 py-3 text-center">
              Artist
            </th>
            <th className="bg-gray-200 text-gray-300 px-6 py-3 text-center">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-6 py-3 border border-gray-300">
              Malcolm Lockyer
            </td>
            <td className="px-6 py-3 border border-gray-300">1961</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">Witchy Woman</td>
            <td className="px-6 py-3 border border-gray-300">The Eagles</td>
            <td className="px-6 py-3 border border-gray-300">1972</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">Shining Star</td>
            <td className="px-6 py-3 border border-gray-300">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-3 border border-gray-300">1975</td>
          </tr>
        </tbody>
      </table>
      <button className="px-6 py-4 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Click me
      </button>
      <button className="px-6 py-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-500 ease-in-out transform hover:scale-220">
        Call me
      </button>
      <button className="px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-500 ease-in-out transform hover:scale-200">
        Send me
      </button>
    </>
  );
}

export default App;
