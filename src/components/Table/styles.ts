import styled from "styled-components";

export const ContainerTable = styled.div`
`

export const Table = styled.table`
`

export const TableHead = styled.thead`
`
export const TableBody = styled.tbody`
`

export const TableRow = styled.tr`
    &:nth-child(odd) {
        background-color: #f0f0f0;
    }

    &:hover {
        color: white;
        background-color: gray;
        cursor: pointer;
    }
`
export const TableColumnHead = styled.th`
    border: 1px solid #eaeaea;
    padding: 8px;
`

export const TableColumnBody = styled.td<{ $cssProps: any}>`
    padding: 8px;
    ${({ $cssProps }) => $cssProps}
`
