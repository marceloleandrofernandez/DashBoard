import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Home
      </h1>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <Link to="/form">Form</Link>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <Link to="/table">Table</Link>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          Messages
        </li>
        <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
      </ul>
      {/* Agrega más enlaces a otros componentes aquí */}
    </>
  );
};
