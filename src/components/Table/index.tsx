import { useNavigate } from "react-router-dom";
import { ContainerTable, Table, TableBody, TableColumnBody, TableColumnHead, TableHead, TableRow } from "./styles";
import { ITableBody, ITableHeader } from "./types";

export const TableList = ({ colsHeader, children }: ITableHeader) => (
    <ContainerTable>
        <Table>
            <TableHead>
                <TableRow>
                    {colsHeader.map((col) => (
                        <TableColumnHead key={col.label}>
                            {col.label}
                        </TableColumnHead>
                    ))}
                </TableRow>
            </TableHead>
        </Table>
        <TableBody>{children}</TableBody>
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
            </TableColumnBody>
        ))}
       </TableRow>
    )
}
