interface Params {
  children: React.ReactNode
}

const MobileViewLayout = ({ children }: Params) => {
  return (
    <div className="relative flex min-h-screen w-full justify-center bg-gray-50">
      <div className="relative min-h-screen w-full max-w-screen-lg bg-white shadow-lg">{children}</div>
    </div>
  )
}

export default MobileViewLayout
