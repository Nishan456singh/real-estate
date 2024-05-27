import Header from "@/components/shared/Header"
import TestimonialCards from "@/components/shared/TestimonialCards"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <TestimonialCards />
    </div>
  )
}