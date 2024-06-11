import { toast } from "react-toastify";
import { ICatcherhandler } from "./types";

export const catchHandler = (err: ICatcherhandler) => {
    toast.dismiss();
    if (err.response?.data) {
        if (err.response?.data) {
            toast.error(err.response.data.message);
        } else {
            toast.error(`Erro: ${err.response.status}`);
        }

        if (err.response.status == 401 && window.location.pathname !== "/login")
            window.location.pathname = "/login";
    } else {
        toast.error("Erro de comunicação");
    }
};
