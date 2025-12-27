export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block">
      <nav className="space-y-4">
        <p className="font-medium">Home</p>
        <p className="font-medium">Projects</p>
        <p className="font-medium">Settings</p>
      </nav>
    </aside>
  );
}
