import { ConnectionOptions } from "typeorm";
interface MigrationIndexSignature {
    [key: string]: any;
}
export default class Migration implements MigrationIndexSignature {
    private config;
    private connection;
    [handlerName: string]: any;
    constructor(config: ConnectionOptions);
    private init;
    runMigration(): Promise<import("typeorm").Migration[] | undefined>;
    undoLastMigration(): Promise<void>;
}
export {};
