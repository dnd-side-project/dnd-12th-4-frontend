import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#292D30] group-[.toaster]:text-white group-[.toaster]:rounded-[12px] group-[.toaster]:font-medium group-[.toaster]:text-[14px] group-[.toaster]:h-[48px] group-[.toaster]:max-w-[340px] group-[.toaster]:fixed group-[.toaster]:bottom-[104px] group-[.toaster]:left-1/2 group-[.toaster]:-translate-x-1/2 group-[.toaster]:font-medium"
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
