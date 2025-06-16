import AppNavigation from "@/components/AppNavigation";
import AppSidebar from "@/components/AppSidebar";
import MediaPlayer from "@/components/MediaPlayer";
// import NetworkStatus from "@/components/NetworkStatus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Main App",
};

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen grid grid-rows-[max-content_1fr] grid-cols-1 mlg:gap-y-3 p-3 lg:grid-cols-[20%_1fr] lg:p-4 lg:gap-x-4 relative">
      <AppNavigation />
      <AppSidebar />
      <main className="!w-full lg:w-max overflow-y-scroll rounded-3xl no-scrollbar app-container px-6 pt-2 pb-20">
        {/* <NetworkStatus> */}
          {children}
        {/* </NetworkStatus> */}
      </main>

      {/* Media Player */}
      <MediaPlayer />
    </main>
  );
}