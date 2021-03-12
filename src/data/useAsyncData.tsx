import { useEffect, useState } from "react";

export function useAsyncData<Result>(
  f: () => Promise<Result>
): "loading" | Result {
  const [state, setState] = useState<"loading" | Result>("loading");
  useEffect(
    function () {
      f()
        .then(setState)
        .catch((err) => {
          setState(() => {
            throw err;
          });
        });
    },
    [f]
  );
  return state;
}
