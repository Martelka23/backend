import { Log } from "typescript-express-openapi";

function logMessage(topic: Log.Topic, severity: Log.Severity, message: string) {
    // Log.logMessage(topic, severity, message);
    console.log(topic, severity, message);
}

interface LogSuccessControllerMessage {
    ok?: true;
    originalUrl: string;
    httpMethod: string;
    statusCode: number;
}

interface LogErrorControllerMessage {
    ok?: false;
    originalUrl: string;
    httpMethod: string;
    statusCode: number;
    message: string;
    details: string[];
}

function logSuccess(logData: LogSuccessControllerMessage) {
    logMessage(Log.Topic.Integration, Log.Severity.Informational, JSON.stringify({ ...logData, ok: true }));
}

function logError(logData: LogErrorControllerMessage) {
    logMessage(Log.Topic.Integration, Log.Severity.Error, JSON.stringify({ ...logData, ok: false }));
}

export {
    logMessage,
    logSuccess,
    logError
};