const fetchWithTimeout = (
  input: RequestInfo,
  init?: RequestInit,
  timeout = 10000,
): Promise<Response> => {
  return Promise.race([
    fetch(input, init),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]) as Promise<Response>;
};

export { fetchWithTimeout };
