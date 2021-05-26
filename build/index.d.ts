declare class ServerlessTypeOrmMigration {
    private serverless;
    private options;
    private commands;
    private hooks;
    private log;
    constructor(serverless: any, options: any);
    missingArguments(): void;
    afterDeploy(): void;
    migrate(): Promise<void>;
    rollback(): Promise<void>;
}
export = ServerlessTypeOrmMigration;
