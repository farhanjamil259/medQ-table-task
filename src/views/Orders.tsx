import React from "react";
import { IColumnType, Table } from "../components/table/Table";
import { orderType } from "../FrontendTaskMockOrdersData";
import { filterData } from "../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const Orders = () => {
  const dispatch = useAppDispatch();

  const columns: IColumnType<orderType>[] = [
    {
      key: "orderID",
      title: "Order #",
      width: 200,
    },
    {
      key: "orderStatus",
      title: "Order Status",
      width: 200,
    },
    {
      key: "customerName",
      title: "Customer",
      width: 200,
    },
    {
      key: "purDate",
      title: "Purchase Date",
      width: 200,
    },
    {
      key: "fulfillDate",
      title: "Fulfilled Date",
      width: 200,
    },
    {
      key: "invoiceStatus",
      title: "Invoice Status",
      width: 200,
    },
    {
      key: "amount",
      title: "Amount",
      width: 200,
      render: (_col, item) => {
        return (
          <strong>
            {item.currency} {item.amount}
          </strong>
        );
      },
    },
  ];

  const orders = useAppSelector((state) => state.data);

  return (
    <Table
      onSearch={(e) => {
        dispatch(filterData({ searchString: e }));
      }}
      data={orders.filteredData}
      columns={columns}
    />
  );
};

export default Orders;
