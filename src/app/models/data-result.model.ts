import { ResultModel } from "./result.model";

export interface DataResultModel<T> extends ResultModel{
    data: T;
}