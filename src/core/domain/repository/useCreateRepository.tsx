import { Repository } from "./IRepository";

export const useCreateRepository = <Result, Params>(
    fetchFn: (params?: Params) => Promise<Result>
): Repository<Result, Params> => {
    const fetch = async (params: Params): Promise<Result> => {
        return fetchFn(params);
    };

    return { fetch };
};