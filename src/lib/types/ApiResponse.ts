export type ApiResponse<T = unknown> = {

    status: "success";
    message: string;
    data: T | null,
} | {

    status: "error",
    errorMessage: string,
    data: null | T,
}