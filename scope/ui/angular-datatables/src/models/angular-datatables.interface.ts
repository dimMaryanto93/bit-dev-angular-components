import {
    FunctionAjax,
    FunctionAjaxData,
    FunctionColumnRender,
    FunctionHeaderCallback,
    FunctionRowCallback
} from "./angular-datatables.types";

export interface ColumnSettings<T> {
    id: string;
    columns: Array<ColumnSetting<T>>;
    rowCallback: FunctionRowCallback<T>;
    ajaxData: string | AjaxSettings | FunctionAjax;
}

export interface AjaxSettings {
    data?: object | FunctionAjaxData;
    dataSrc?: string | ((data: any) => any[]);
}

export interface AjaxDataRequest {
    draw: number;
    start: number;
    length: number;
    order: Array<AjaxDataRequestOrder>;
}

export interface AjaxDataResponse<T> {
    draw: number;
    data: Array<T>;
    recordsFiltered: number;
    recordsTotal: number;
}

export interface AjaxDataRequestOrder {
    column: number;
    dir: string;
}

export interface ColumnSetting<T> {

    className?: string;
    contentPadding?: string;
    createdCell?: any;
    data: string | null | undefined;
    orderable?: boolean;
    orderData?: number | number[];
    orderDataType?: string;
    orderFixed?: any[];
    ajax?: string | AjaxSettings | FunctionAjax;
    render?: FunctionColumnRender<T>;
    searchable?: boolean;
    title: string;
    visible?: boolean;
    width?: string;
    rowCallback?: FunctionRowCallback<T>;
    headerCallback?: FunctionHeaderCallback<T>;
}
