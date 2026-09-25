import { X } from "lucide-react";
import SidebarContent from "./SidebarContent";

export default function MobileSidebar({
  open,
  onClose,
}) {
  return (
    <div
      className={[
        "fixed inset-0 z-[60] lg:hidden",
        open ? "visible" : "invisible pointer-events-none",
      ].join(" ")}
    >
      {/* Backdrop */}
      <div
        className={[
          "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={[
          "absolute left-0 top-0 h-full w-[290px] overflow-y-auto border-r border-[var(--border)] bg-[var(--background)] shadow-2xl transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-label="Mobile documentation navigation"
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-5">
          <div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              CMR
            </div>

            <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              Help Center
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            aria-label="Close navigation"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <SidebarContent onNavigate={onClose} />
        </div>
      </aside>
    </div>
  );
}

// import { X } from "lucide-react";
// import SidebarContent from "./SidebarContent";

// export default function MobileSidebar({
//   open,
//   onClose,
// }) {
//   return (
//     <div
//       className={[
//         "fixed inset-0 z-[60] lg:hidden",
//         open ? "visible" : "invisible pointer-events-none",
//       ].join(" ")}
//     >
//       {/* Backdrop */}
//       <div
//         className={[
//           "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-200",
//           open ? "opacity-100" : "opacity-0",
//         ].join(" ")}
//         onClick={onClose}
//       />

//       {/* Drawer */}
//       <aside
//         className={[
//           "absolute left-0 top-0 h-full w-[290px] overflow-y-auto border-r border-[var(--border)] bg-[var(--background)] shadow-2xl transition-transform duration-200",
//           open ? "translate-x-0" : "-translate-x-full",
//         ].join(" ")}
//       >
//         <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-5">
//           <div>
//             <div className="text-sm font-semibold text-[var(--text-primary)]">
//               CMR
//             </div>

//             <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
//               Help Center
//             </div>
//           </div>

//           <button
//             onClick={onClose}
//             className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
//             aria-label="Close navigation"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <div className="p-4">
//           <SidebarContent onNavigate={onClose} />
//         </div>
//       </aside>
//     </div>
//   );
// }