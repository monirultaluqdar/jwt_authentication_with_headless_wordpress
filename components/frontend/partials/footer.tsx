export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© {year} Headless. All rights reserved.</p>
        <p>JWT authentication with WordPress</p>
      </div>
    </footer>
  );
}
