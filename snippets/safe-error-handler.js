export function safeErrorHandler(err, req, res, next) {
  const requestId = req.id;
  req.log?.error({ err, requestId }, "request_failed");
  if (res.headersSent) return next(err);
  return res.status(500).json({ error: "INTERNAL_SERVER_ERROR", requestId });
}
