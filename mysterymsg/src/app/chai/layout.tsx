
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>Inner layout Chai Items</h2>
      {children}
    </>
  );
}
