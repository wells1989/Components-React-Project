import Table from "./Table";
import { BsArrowDownUp, BsArrowDownCircleFill, BsArrowUpCircleFill } from 'react-icons/bs';
import useSort from "../hooks/use-sort";

function SortableTable(props) {

    const { config, data } = props;

    const {sortOrder, sortBy, sortedData, setSortColumn} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-500" onClick={() => setSortColumn(column.label)}>
                    <div className="flex justify-center items-center m-2">
                        {getIcons(column.label, sortBy, sortOrder)}   
                        <div className="p-2">
                            {column.label}
                        </div>
                    </div>
                </th>
        }
    });

    return <div>
        <Table {...props} data={sortedData} config={updatedConfig}/>
        </div>
}

    function getIcons(label, sortBy, sortOrder) {
        if (label !== sortBy) {
            return <BsArrowDownUp/>
        }

        if (sortOrder === null) {
            return <BsArrowDownUp/>
        } else if (sortOrder === 'asc') {
            return <BsArrowUpCircleFill/>
        } else if (sortOrder === 'desc') {
            return <BsArrowDownCircleFill/>
        }
    }

export default SortableTable;