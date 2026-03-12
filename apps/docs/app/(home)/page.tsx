import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">AdapterHub Docs</h1>
      <p>
        Documentation for publishing packages across npm, PyPI, Crates.io, and
        more. Open{' '}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{' '}
        to get started.
      </p>
    </div>
  );
}
