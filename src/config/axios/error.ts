import { AxiosError } from "axios";

class ErrorHandler {
    error!: AxiosError;
    constructor(error: AxiosError) {
        this.error = error;
    }
}

export default ErrorHandler