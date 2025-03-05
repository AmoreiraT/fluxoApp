export interface Repository<Data, Params> {
    fetch: (params: Params) => Promise<Data>;
}