import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname, query } = parse(req.url || '/', true);
    const { date, partnerLogo } = (query || {});

    if (Array.isArray(date)) {
        throw new Error('Expected a single date');
    }
    if (Array.isArray(partnerLogo)) {
        throw new Error('Expected a single partner logo');
    }

    let extension = '';
    let text = (pathname || "/").slice(1);

    const parsedRequest: ParsedRequest = {
      fileType: extension === "jpeg" ? extension : "png",
      text: decodeURIComponent(text),
      date: date,
      partnerLogo: partnerLogo,
    };
    return parsedRequest;
}
