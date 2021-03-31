async function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function pretendNetwork() {
  await sleep(500 + 500 * Math.random());
}
