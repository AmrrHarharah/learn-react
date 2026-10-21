import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/component/app-sidebar";
import { useLocation, useRoutes } from "react-router";
import { appRoutes } from "./router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function App() {
  const routes = useRoutes(appRoutes);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/admin");
  const prefersReducedMotion = useReducedMotion();

  const page = (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
        transition={{
          duration: prefersReducedMotion ? 0.12 : 0.22,
          ease: "easeOut",
        }}
        className={
          isDashboard ? "flex min-h-0 flex-1 flex-col" : "min-h-screen"
        }
      >
        {routes}
      </motion.div>
    </AnimatePresence>
  );

  if (!isDashboard) {
    return (
      <TooltipProvider>
        <main className="min-h-screen">{page}</main>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="font-semibold">Dashboard Pembelajaran</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4">{page}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default App;
