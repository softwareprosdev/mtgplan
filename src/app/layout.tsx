import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MtgPlan",
  description: "Mortgage protection insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
