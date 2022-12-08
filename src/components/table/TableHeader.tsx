import { SortConfig } from "../../hooks/useSortableData";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import { IColumnType } from "./Table";

interface Props<T> {
  columns: IColumnType<T>[];
  onTitleClick?: (key: string) => void;
  sortConfig: SortConfig | null;
}

export function TableHeader<T>({
  columns,
  onTitleClick,
  sortConfig,
}: Props<T>): JSX.Element {
  const getSortName = (name: string) => {
    if (!sortConfig) {
      return;
    }
    console.log(name, sortConfig.key, sortConfig.direction);

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <thead className="table_header">
      <tr>
        {columns.map((column, columnIndex) => (
          <td
            className="table_header_data"
            key={`table-head-cell-${columnIndex}`}
            style={{ width: column.width }}
            onClick={() => {
              onTitleClick && onTitleClick(column.key);
            }}
          >
            {column.title}{" "}
            {getSortName(column.key) ? (
              sortConfig?.direction === "ascending" ? (
                <ArrowUp />
              ) : (
                <ArrowDown />
              )
            ) : (
              ""
            )}
          </td>
        ))}
      </tr>
    </thead>
  );
}
