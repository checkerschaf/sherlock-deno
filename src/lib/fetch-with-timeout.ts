const fetchWithTimeout = (
  input: RequestInfo,
  init?: RequestInit,
  timeout = 10000,
): Promise<unknown> => {
  const p = Promise.race([
    fetch(input, init),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]);
  return p;
};

export { fetchWithTimeout };
