import { Title } from "@solidjs/meta";

export default function Registries() {
  return (
    <>
      <Title>Registries — AdapterHub</Title>
      <h1>Supported registries</h1>
      <p>Central view of registries you can publish to via trusted publishing (OIDC).</p>
      <ul>
        <li>npm (JavaScript/TypeScript)</li>
        <li>PyPI (Python)</li>
        <li>Crates.io (Rust)</li>
        <li>More coming once custom OIDC is supported by registries.</li>
      </ul>
    </>
  );
}
