import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[250px] shrink-0 overflow-y-auto border-r border-[var(--border)] bg-[var(--background)] px-4 py-7 lg:block">
      <SidebarContent />
    </aside>
  );
}