export class ConfigService {
    private readonly envConfig: { [key: string]: string };
    constructor() {}

    get(key: string): string {
        return this.envConfig[key];
    }   
}
