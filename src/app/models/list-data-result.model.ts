import { ResultModel } from "./result.model";

export interface ListDataResult<T> extends ResultModel{
    data: T[]
}