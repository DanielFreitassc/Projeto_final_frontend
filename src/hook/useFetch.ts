import { useCallback, useEffect, useState } from "react";
import { privateAPi } from "../services/privateApi";
import { catchHandler } from "../utils/functions";

interface IuseFetchProps {
    api: string;
    detail?: string;
}

interface IuseFetchReturn<T> {
    data: T;
    loading: boolean;
    refetch: () => void;
}

export const useFetch = <T>({
    api,
    detail = "",
}: IuseFetchProps): IuseFetchReturn<T> => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        await privateAPi
            .get(detail ? `${api}/${detail}` : api)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                catchHandler(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const refetch = async () => {
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data: data!, loading, refetch };
};