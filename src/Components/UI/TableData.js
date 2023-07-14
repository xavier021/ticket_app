import React from "react";
import { Link } from "react-router-dom";

export default function Td({children, to}){
    const Content = to ? Link: 'div';

    return(
        <td>
            <Content to={to}>{children}</Content>
        </td>
    )
}