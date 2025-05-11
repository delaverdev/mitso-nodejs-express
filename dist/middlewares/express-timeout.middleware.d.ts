import { Request, Response, NextFunction } from 'express';
interface TimeoutRequest extends Request {
    timedout: boolean;
}
export declare const timeoutMiddleware: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const timeoutHandler: (req: TimeoutRequest, res: Response, next: NextFunction) => void;
export {};
