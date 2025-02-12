import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      style={{ fontFamily: "var(--font-pretendard)" }}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#292D30] group-[.toaster]:text-white group-[.toaster]:rounded-[12px] group-[.toaster]:font-medium group-[.toaster]:text-[14px] group-[.toaster]:h-[48px] group-[.toaster]:w-[343px]"
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
