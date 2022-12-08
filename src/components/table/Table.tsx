import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

import "./Table.scss";
import SearchInput from "../SearchInput";
import useSortableData from "../../hooks/useSortableData";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
  sortable?: boolean;
}

export type TableProps<T> = {
  data: T[];
  columns: IColumnType<T>[];
  onSearch?: (searchString: string) => void;
};

export function Table<T>({
  data,
  columns,
  onSearch,
}: TableProps<T>): JSX.Element {
  const { items, requestSort, sortConfig } = useSortableData(data);

  return (
    <>
      <SearchInput onSearch={onSearch} />
      <table className="table">
        <TableHeader
          columns={columns}
          onTitleClick={(key) => {
            requestSort(key);
          }}
          sortConfig={sortConfig}
        />
        <TableRow data={items} columns={columns} />
      </table>
    </>
  );
}
