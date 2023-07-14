import React from "react";
import Td from "./TableData";

export default function TableRow(props) {

  return (
    <tr className="table-row" key={props.id}>
      <Td to={`/ticket/${props.id}`}>{props.id}</Td>
      <Td to={`/ticket/${props.id}`}>{props.user}</Td>
      <Td to={`/ticket/${props.id}`}>{props.admin}</Td>
      <Td to={`/ticket/${props.id}`}>{props.subject}</Td>
      <Td to={`/ticket/${props.id}`}>{props.name}</Td>
    </tr>
  );
}