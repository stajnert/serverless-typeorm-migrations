"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDatabaseConnectionString(logger) {
    if (!process.env.SLS_TYPEORM_MIGRATIONS_DATABASE_URL) {
        logger("SLS_TYPEORM_MIGRATIONS_DATABASE_URL environment variable required");
        process.exit(1);
    }
    return process.env.SLS_TYPEORM_MIGRATIONS_DATABASE_URL;
}
exports.getDatabaseConnectionString = getDatabaseConnectionString;
function getEngine(logger) {
    if (!process.env.SLS_TYPEORM_MIGRATIONS_ENGINE) {
        logger("SLS_TYPEORM_MIGRATIONS_ENGINE environment variable required");
        process.exit(1);
    }
    return process.env.SLS_TYPEORM_MIGRATIONS_ENGINE;
}
exports.getEngine = getEngine;
function getMigrationFolder(logger) {
    if (!process.env.SLS_TYPEORM_MIGRATIONS_FOLDER) {
        logger("SLS_TYPEORM_MIGRATIONS_FOLDER environment variable required");
        process.exit(1);
    }
    return process.env.SLS_TYPEORM_MIGRATIONS_FOLDER;
}
exports.getMigrationFolder = getMigrationFolder;
function logMigrations(logger, migrations) {
    if (typeof migrations !== "undefined" && (migrations === null || migrations === void 0 ? void 0 : migrations.length) > 0) {
        migrations === null || migrations === void 0 ? void 0 : migrations.forEach(function (migration) { return logger("Migrated: " + migration.name); });
    }
    else {
        logger("No new migrations to run");
    }
}
exports.logMigrations = logMigrations;
