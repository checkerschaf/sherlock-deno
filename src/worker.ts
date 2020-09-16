import { WorkerResultMessage, WorkerStartMessage } from "./types.ts";
import { ScannerResult } from "./enums.ts";
import { fetchWithTimeout } from "./lib/fetch-with-timeout.ts";

const checkUsernameAtUrl = async (
  url: URL,
  username: string,
  timeout = 10000,
): Promise<WorkerResultMessage> => {
  const responseOrTimeout = await fetchWithTimeout(url.toString(), {
    redirect: "follow",
    headers: new Headers({
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
    }),
  }, timeout);
  const response = responseOrTimeout as Response;

  if (response.status != 200) return { result: ScannerResult.NOT_FOUND };

  const text = await response.text();
  return pageContainsUsername(text, username)
    ? { result: ScannerResult.SUCCESS }
    : { result: ScannerResult.NOT_FOUND };
};

const pageContainsUsername = (data: string, username: string) => {
  return data.includes(username) && !data.includes("Not Found") &&
    !data.includes("Not found") && !data.includes("exist");
};

self.onmessage = (event): void => {
  const msg = <WorkerStartMessage> event.data;
  checkUsernameAtUrl(new URL(msg.url), msg.username, msg.timeout)
    .then((result) => postMessage(result))
    .catch((err) => {
      postMessage({ result: ScannerResult.ERROR, error: err.message });
    })
    .finally(() => self.close());
};
