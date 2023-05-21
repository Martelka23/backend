interface Topic {

}

interface Severity {

}

function logMessage(topic: Topic, severity: Severity, message: string) {
    // logMessage(topic, severity, message);
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
    // logMessage(Topic.Integration, Severity.Informational, JSON.stringify({ ...logData, ok: true }));
}

function logError(logData: LogErrorControllerMessage) {
    // logMessage(Topic.Integration, Severity.Error, JSON.stringify({ ...logData, ok: false }));
}

export {
    logMessage,
    logSuccess,
    logError
};