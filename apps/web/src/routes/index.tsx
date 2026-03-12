import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <>
      <Title>AdapterHub — Publish across registries</Title>
      <h1>AdapterHub</h1>
      <p>
        One dashboard to publish your adapters to npm, PyPI, Crates.io, and more.
        Connect GitHub, add trusted publishers once, and publish without
        managing API keys.
      </p>
      <p>
        <a href="/dashboard">Go to Dashboard</a> ·{" "}
        <a href="/docs" target="_blank" rel="noopener" title="Run pnpm dev:docs and open http://localhost:3000/docs">
          Documentation
        </a>
      </p>
    </>
  );
}
