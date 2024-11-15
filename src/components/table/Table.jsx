const Table = ({ headers, data, children }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500">No hay datos disponibles</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-2 text-left bg-gray-100 border-b border-gray-200 text-center text-gray-700 font-semibold"
              >
                { header }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
