import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const InvoiceTable = () => {
  const data = [
    { id: '#6545', customerName: 'Jane Cooper', city: 'Sydney', orderDate: '01 Oct | 11:29 am', status: 'Paid', amount: '$64' },
    { id: '#5412', customerName: 'Wade Warren', city: 'Perth', orderDate: '01 Oct | 11:45 am', status: 'Paid', amount: '$557' },
    { id: '#6622', customerName: 'Jenny Wilson', city: 'Darwin', orderDate: '01 Oct | 12:10 pm', status: 'Pending', amount: '$156' },
    { id: '#6462', customerName: 'Robert Fox', city: 'Albany', orderDate: '01 Oct | 01:15 pm', status: 'Paid', amount: '$265' }
  ];

  const columns = useMemo(() => [
      {
        Header: 'No',
        accessor: 'no',
        Cell: ({ row }) => row.index + 1, // Display index as row number
      },
      {
        Header: 'Id Customer',
        accessor: 'id',
      },
      {
        Header: 'Customer Name',
        accessor: 'customerName',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'Order Date',
        accessor: 'orderDate',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span className={`status ${value.toLowerCase()}`}>{value}</span>
        ),
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="invoice-table">
      <h3>Recent Invoice</h3>
      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
