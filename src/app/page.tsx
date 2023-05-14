export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="flex flex-col gap-3">
            <span> Home </span>
            <span> Seach </span>
            <span> Libray </span>
          </nav>
        </aside>
        <main className="flex-1 p-6"> Main </main>
      </div>
      <footer className="bg-zinc-800 p-6"> Footer</footer>
    </div>
  );
}
