import { ContactButton, CvButton } from './components'

interface Props {
  handleDownloadCV(): void
}

export default function Buttons({ handleDownloadCV }: Props) {
  return (
    <div className="flex gap-5 items-center">
      <ContactButton />
      <CvButton handleDownloadCV={handleDownloadCV} />
    </div>
  )
}
