//import PropTypes from "prop-types";
import "./sensorTable.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
export const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setTableData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            tableData.map((item, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4 ">{item.email}</td>
                <td className="px-6 py-4 ">
                  <Link to="/form" state={{ data: item }} component={Form}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Link to="/">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span>Home</span>
        </button>
      </Link>
    </div>
  );
};

/* Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
}; */
