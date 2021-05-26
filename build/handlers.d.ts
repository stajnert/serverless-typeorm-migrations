import { Context, Callback } from "aws-lambda";
declare const up: (event: any, context: Context, callback: Callback<any>) => Promise<void>;
declare const down: (event: any, context: Context, callback: Callback<any>) => Promise<void>;
export { up, down };
