import { useNavigate } from "react-router-dom";
import { ContainerTable, Table, TableBody, TableColumnBody, TableColumnHead, TableHead, TableRow, TableRowHead } from "./styles";
import { ITableBody, ITableHeader } from "./types";

export const TableList = ({ colsHeader, children }: ITableHeader) => (
    <ContainerTable>
        <Table>
            <TableHead>
                <TableRowHead>
                    {colsHeader.map((col, index) => (
                        <TableColumnHead key={index}>
                            {col.label}
                        </TableColumnHead>
                    ))}
                </TableRowHead>
            </TableHead>
            <TableBody>{children}</TableBody>
        </Table>
    </ContainerTable>
);

export const TableContent = ({ colsBody, linkTo }: ITableBody) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(linkTo) navigate(linkTo);
    }

    return(
       <TableRow onClick={handleClick}>
        {colsBody.map((col, i: number) => (
            <TableColumnBody
                key={col.cell + i}
                $cssProps={col.cssProps}
            >
                {col.cell}
            </TableColumnBody>
        ))}
       </TableRow>
    )
}
