import AppNavigation from "@/components/AppNavigation";
import NetworkStatusProvider from "@/components/NetworkStatus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Main App",
};

export default function DAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dapp-container">
      <AppNavigation variant="dapp" />
      <main className="pt-8">
        {children}
      </main>
    </main>
  );
}