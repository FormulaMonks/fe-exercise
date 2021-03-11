import { MainLayout } from "src/layouts";

export function NotFound() {
  return (
    <MainLayout title="Not found">
      <h1>URL problem</h1>
      <p>
        Sorry, the URL may be incorrect. Check the spelling or navigate using
        the menu above.
      </p>
    </MainLayout>
  );
}
