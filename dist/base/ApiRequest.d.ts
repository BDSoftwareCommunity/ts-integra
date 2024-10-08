import { AxiosBasicCredentials, AxiosProxyConfig, ResponseType, CancelToken } from "axios";
export declare abstract class ApiRequest {
    private invoker;
    init(config: Config): void;
    get(path?: string, options?: any): Promise<import("axios").AxiosResponse<any, any>>;
    post<T = any>(path?: string, data?: T, options?: any): Promise<import("axios").AxiosResponse<any, any>>;
    put<T = any>(path?: string, data?: T, options?: any): Promise<import("axios").AxiosResponse<any, any>>;
    delete(path?: string, options?: any): Promise<import("axios").AxiosResponse<any, any>>;
    head(path?: string, options?: any): Promise<import("axios").AxiosResponse<any, any>>;
    options(path?: string, options?: any): Promise<import("axios").AxiosResponse<any, any>>;
    patch<T = any>(path?: string, data?: T, options?: any): Promise<any>;
}
export type Config = {
    baseURL: string;
    url?: string;
    headers?: object;
    params?: object;
    data?: object;
    auth?: AxiosBasicCredentials;
    withCredentials?: boolean;
    transformRequest?: any;
    transformResponse?: any;
    paramsSerializer?: any;
    timeout?: number;
    adapter?: any;
    responseType?: ResponseType;
    responseEncoding?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: any;
    onDownloadProgress?: any;
    maxContentLength?: number;
    maxBodyLength?: number;
    validateStatus?: any;
    maxRedirects?: number;
    socketPath?: any;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig;
    cancelToken?: CancelToken;
    decompress?: boolean;
};
