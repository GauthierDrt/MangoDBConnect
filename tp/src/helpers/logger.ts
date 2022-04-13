import dayjs from 'dayjs';
import pino from 'pino';

export const logger = pino({
    name: 'app-name',
    level: 'debug'
});
