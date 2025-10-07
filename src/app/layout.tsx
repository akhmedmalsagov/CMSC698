export const metadata = {
title: 'ERZI Hockey Development Agency',
description: 'Creating opportunities on and off the ice.',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
    <html lang="en">
        <body className="min-h-screen bg-white text-neutral-900">
            <header className="border-b">
                <div className="mx-auto max-w-6xl p-4 flex items-center justify-between">
                    <div className="text-xl font-extrabold tracking-wide">ERZI HDA</div>
                    <nav className="flex items-center gap-6 text-sm">
                        <a href="#about" className="hover:opacity-70">About</a>
                        <a href="#what" className="hover:opacity-70">What We Do</a>
                        <a href="#clients" className="hover:opacity-70">Clients</a>
                        <a href="#numbers" className="hover:opacity-70">By the Numbers</a>
                        <a href="#team" className="hover:opacity-70">Team</a>
                        <a href="#contact" className="rounded bg-black px-3 py-1.5 text-white">Contact</a>
                    </nav>
                </div>
            </header>
            <main className="mx-auto max-w-6xl p-6">{children}</main>
            <footer className="mt-16 border-t">
                <div className="mx-auto max-w-6xl p-4 text-sm text-neutral-500">© {new Date().getFullYear()} ERZI Hockey Development Agency</div>
            </footer>
        </body>
    </html>
    );
  }