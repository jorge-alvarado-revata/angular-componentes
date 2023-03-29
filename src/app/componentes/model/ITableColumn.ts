export interface ITableColumn {
    columnDef: string;
    header: string;
    cell?: (element:any, field: string ) => string;
}