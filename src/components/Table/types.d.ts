import { CSSProperties } from "styled-components";

export interface ITableHeader {
    colsHeader: {
        label: string;
    }[];
    children: React.ReactNode[] | React.ReactNode;
}

export interface ITableBody {
    colsBody: {
        cell: any;
        cssProps?: CSSProperties;
    }[];
    linkTo?: string;
}