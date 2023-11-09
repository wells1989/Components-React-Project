import { Fragment } from "react";
import Panel from "./Panel";

function Table({ data, config, keyFn }) {

    const renderedHeaders = config.map((column) => {
        return column.header? <Fragment className="text-center" key={column.label}>{column.header()}</Fragment> : <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map((rowData) => {

        const renderedCells = config.map((column) => {
            return <td className="p-5 text-center" key={column.label}>{column.render(rowData)}</td>
        })

        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCells}
            </tr>
        )
    }) 

    return (
    <Panel>
    <table className=" w-full table-auto border-spacing-2 bg-gray-200">
        <thead>
            <tr className="border-b-2">
            {renderedHeaders}
            </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
    </table>
    </Panel>
    )
}

export default Table;
