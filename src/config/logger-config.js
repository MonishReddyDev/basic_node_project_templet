import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;


const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});


const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-DD-MM HH:mm:ss' }),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: "combined.log" })
    ]
});


export default logger