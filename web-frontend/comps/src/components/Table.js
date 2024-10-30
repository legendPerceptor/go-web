function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}> {column.label} </th>;
  });

  const renderedRows = data.map((fruit) => {
    const row_columns = config.map((column) => {
      return <td className="p-3"> {column.render(fruit)}</td>;
    });
    return (
      <tr className="border-b" key={fruit.name}>
        {row_columns}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
