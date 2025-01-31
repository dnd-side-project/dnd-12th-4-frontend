import { cn } from "@/utils/cn"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/layout/Header"))
const Footer = dynamic(() => import("@/components/layout/Footer"))

interface Params {
  children: React.ReactNode
  header?: boolean
  footer?: boolean
}
export default function HeaderFooterWrapper({ children, header, footer }: Params) {
  return (
    <>
      {header && <Header />}
      <section className={cn(header && "pt-[40px]", footer && "pb-[80px]", "h-full w-full")}>
        <section className="relative h-full w-full">{children}</section>
      </section>
      {footer && <Footer />}
    </>
  )
}
