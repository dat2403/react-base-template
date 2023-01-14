import {AxiosResponse} from "axios";
import BaseResponse from "../models/BaseResponse";

export default class HttpHelper {
  static processRes<T>(
    res: AxiosResponse<BaseResponse<T>>,
    onSuccess?: (data: BaseResponse<T>) => void,
    onError?: (errorText: string) => void,
  ) {
    if (this.isSuccess(res)) {
      if (onSuccess) {
        onSuccess(res.data)
      } else {
        //todo show success toast
      }
    } else {
      if (onError) {
        onError(res.data.message)
      } else {
        //todo show warning toast
      }
    }
  }

  static isSuccess<T>(res: AxiosResponse<BaseResponse<T>>) {
    return res.status === 200 && res.data.code === 200
  }
}
