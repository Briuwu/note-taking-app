function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="grid min-h-screen place-content-center">{children}</main>
  );
}
export default AuthLayout;
