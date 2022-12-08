import { get } from "lodash";

import { IColumnType } from "./Table";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <td className="table_row_data">
      {column.render ? column.render(column, item) : value}
    </td>
  );
}
