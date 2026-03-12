import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>PackageHub — Publish across registries</Title>
      <Router
        root={(props) => (
          <>
            <nav style="padding: 1rem 2rem; border-bottom: 1px solid #eee;">
              <a href="/">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/registries">Registries</a>
            </nav>
            <main>
              <Suspense>{props.children}</Suspense>
            </main>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
