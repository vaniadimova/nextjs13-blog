import Header from "../../components/Header";
import "../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="mx-auto max-w-7xl">
        <Header />
        <main className="p-5"> {children}</main>
       </body>
    </html>
  )
}
