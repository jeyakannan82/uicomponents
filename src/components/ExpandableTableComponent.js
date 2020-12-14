// src/components/expandable.table.js
import React from "react";

import { useTable, useExpanded } from 'react-table'


function Table({ columns: userColumns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { expanded },
    } = useTable(
        {
            columns: userColumns,
            data,
        },
        useExpanded // Use the useExpanded plugin hook
    )

    // Render the UI for your table
    return (
        <div>
            <table className="table" {...getTableProps()}>
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
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

function ExpandableTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                id: 'expander', // Make sure it has an ID
                Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
                    <span {...getToggleAllRowsExpandedProps()}>
                        {isAllRowsExpanded ? '👇' : '👉'}
                    </span>
                ),
                Cell: ({ row }) =>
                    row.canExpand ? (
                        <span
                            {...row.getToggleRowExpandedProps({
                                style: {
                                    paddingLeft: `${row.depth * 2}rem`,
                                },
                            })}
                        >
                            {row.isExpanded ? '👇' : '👉'}
                        </span>
                    ) : null,
            },
            {
                Header: 'UserId',
                columns: [
                    {
                        Header: 'UserId',
                        accessor: 'firstName',
                    }
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Response',
                        accessor: 'response',
                    },
                    {
                        Header: 'Failed Count',
                        accessor: 'ifCount',
                    },
                    {
                        Header: 'Success Count',
                        accessor: 'okCount',
                    },
                    {
                        Header: 'User Failures',
                        accessor: 'ufCount',
                    },
                    {
                        Header: 'User Experience',
                        accessor: 'userExperience',
                    },
                     {
                         Header: 'Meet Expectation',
                         accessor: 'meetExpectation',
                     },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "firstName": "7384728374",
            "response": 2,
            "ifCount": 23,
            "okCount": 67578,
            "ufCount": 10,
            "userExperience": "99.1%",
            "meetExpectation": "Yes",
            "subRows": [
                {
                "firstName": "7384728374",
                "response": 1.2,
                "ifCount": 30,
                "okCount": 87987,
                "ufCount": 70,
                "userExperience": "98.12%",
                "meetExpectation": "Yes"
                },
                {
                    "firstName": "7384728374",
                    "response": 3,
                    "ifCount": 89,
                    "okCount": 432,
                    "ufCount": 60,
                    "userExperience": "70.16%",
                    "meetExpectation": "No"
                },
                 {
                     "firstName": "7384728374",
                     "response": 2,
                     "ifCount": 89,
                     "okCount": 4244,
                     "ufCount": 60,
                     "userExperience": "70.16%",
                     "meetExpectation": "No"
                 },
                  {
                      "firstName": "7384728374",
                      "response": 2,
                      "ifCount": 89,
                      "okCount": 4244,
                      "ufCount": 60,
                      "userExperience": "70.16%",
                      "meetExpectation": "No"
                  }
            ]
        },
        {
            "firstName": "3565578",
            "response": 5,
            "ifCount": 19,
            "okCount": 76699,
            "ufCount": 40,
            "userExperience": "30.13%",
            "meetExpectation": "No",
            "subRows": [
                {
                "firstName": "3565578",
                "response": 1,
                "ifCount": 19,
                "okCount": 2345,
                "ufCount": 70,
                "userExperience": "95.1%",
                "meetExpectation": "Yes"
                },
                {
                    "firstName": "3565578",
                    "response": 3,
                    "ifCount": 89,
                    "okCount": 4567,
                    "ufCount": 70,
                    "userExperience": "99.1%",
                    "meetExpectation": "Yes"
                },
             {
                 "firstName": "3565578",
                 "response": 3,
                 "ifCount": 19,
                 "okCount": 2313,
                 "ufCount": 44,
                 "userExperience": "99.1%",
                 "meetExpectation": "Yes"
             },
             {
                 "firstName": "3565578",
                 "response": 2,
                 "ifCount": 10,
                 "okCount": 333,
                 "ufCount": 41,
                 "userExperience": "98.1%",
                 "meetExpectation": "Yes"
             }
            ]
        }
    ]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default ExpandableTableComponent;