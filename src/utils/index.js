export function getFullUrl(req) {
  // FIX: protocol can be https
  // Can't know the protocol on server side
  // Possible to store it in environment variable
  return req
    ? `http://${req.headers.host}${req.url}`
    : `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? ':' + window.location.port : ''
      }${window.location.pathname}`;
}
