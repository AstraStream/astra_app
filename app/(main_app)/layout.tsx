import { ChainProvider } from "@/providers/ChainProvider";

export default function MainAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChainProvider>
        {children}
    </ChainProvider>
  );
}