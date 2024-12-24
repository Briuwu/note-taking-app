function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="grid min-h-screen place-content-center dark:bg-neutral-700">
      {children}
    </main>
  );
}
export default AuthLayout;
