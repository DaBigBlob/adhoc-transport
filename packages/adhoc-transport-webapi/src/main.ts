const _fetch = fetch;
class _WebSocket extends WebSocket {}
class _Request extends Request {}
class _Response extends Response {}
type _RequestInfo = RequestInfo;
type _RequestInit = RequestInit;
type _ResponseInit = ResponseInit;
class _Headers extends Headers {}
type _HeadersInit = HeadersInit;

export {
    _fetch as fetch,
    _WebSocket as WebSocket,
    _Request as Request,
    _Response as Response,
    type _RequestInfo as RequestInfo,
    type _RequestInit as RequestInit,
    type _ResponseInit as ResponseInit,
    _Headers as Headers,
    type _HeadersInit as HeadersInit
};