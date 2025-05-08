import AppNavigation from "@/components/AppNavigation";
import AppSidebar from "@/components/AppSidebar";
import NetworkStatusProvider from "@/providers/NetworkStatusProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Main App",
};

export default function MainAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen grid grid-cols-1 grid-rows-[max-content_1fr] mlg:grid-cols-[30%_1fr] mlg:gap-3 p-3 lg:grid-cols-[23%_1fr] lg:p-4 lg:gap-x-5 relative">
      <AppNavigation />
      <AppSidebar />
      <main className="overflow-y-scroll rounded-3xl p-6 no-scrollbar app-container">
        {/* <NetworkStatusProvider> */}
          {children}
        {/* </NetworkStatusProvider> */}
      </main>
    </main>
  );
}