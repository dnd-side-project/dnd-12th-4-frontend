import { ALLOWED_TYPES, MAX_SIZE } from "@/constants/image"
import { toast } from "sonner"

interface ImageChangeProps {
  event: React.ChangeEvent<HTMLInputElement>
  setFile: React.Dispatch<React.SetStateAction<File | null>>
  setPreview: React.Dispatch<React.SetStateAction<string>>
}

export const handleImageChange = ({ event, setFile, setPreview }: ImageChangeProps) => {
  const selectedFile = event.target.files?.[0] || null

  if (selectedFile) {
    if (selectedFile && selectedFile.size > MAX_SIZE) {
      toast("이미지 파일의 최대 용량은 5MB입니다.")
      return
    }

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      toast("허용된 파일 형식은 .jpg, .jpeg, .png, .webp 입니다.")
      return
    }

    setFile(selectedFile)

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)
  } else {
    setPreview("")
  }
}

interface ImageDeleteProps {
  setPreview: React.Dispatch<React.SetStateAction<string>>
}

export const handleDeleteButton = ({ setPreview }: ImageDeleteProps) => {
  setPreview("")
}
