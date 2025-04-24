import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts",
  description: "Authentication",
};

export default function AccountsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen h-full">
        {children}
    </main>
  );
}
