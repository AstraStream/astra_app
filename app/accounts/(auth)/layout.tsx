import React from 'react'

const AuthLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen h-full grid grid-cols-[40%_1fr]">
      <section className="bg-gradient-to-b from-primary to-secondary rounded-tr-3xl rounded-br-3xl">Content</section>
      <section className="pt-10 pb-6 overflow-y-scroll min-h-screen h-full flex justify-center items-center">
        {children}
      </section>
    </main>
  )
}

export default AuthLayout