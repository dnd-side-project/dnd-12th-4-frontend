import { Pen } from "lucide-react"
import { InputHTMLAttributes } from "react"

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  previewImage: string
  handleDeleteButton?: () => void
  handleImageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const ImageInput = ({ previewImage, handleDeleteButton, handleImageChange }: ImageInputProps) => {
  return (
    <div>
      {previewImage ? (
        <div
          className="relative h-[100px] w-[100px] rounded-full"
          style={{
            backgroundImage: `url(${previewImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute bottom-0 right-0 flex size-[29px] items-center justify-center rounded-full border border-opacity-[0.12] bg-white">
            <Pen className="size-4 text-black" onClick={handleDeleteButton} />
          </div>
        </div>
      ) : (
        <div className="relative h-[100px] w-[100px] rounded-full border border-solid p-[58px]">
          <input className="absolute inset-0 h-full w-full opacity-0" type="file" onChange={handleImageChange} />
          <div className="absolute bottom-0 right-0 flex size-[29px] items-center justify-center rounded-full border border-opacity-[0.12] bg-white">
            <Pen className="size-4 text-black" />
          </div>
        </div>
      )}
    </div>
  )
}
