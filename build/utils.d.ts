import { Migration } from "typeorm";
export declare function getDatabaseConnectionString(logger: (message: string) => void): string;
export declare function getEngine(logger: (message: string) => void): any;
export declare function getMigrationFolder(logger: (message: string) => void): string;
export declare function logMigrations(logger: (message: string) => void, migrations: Migration[] | undefined): void;
