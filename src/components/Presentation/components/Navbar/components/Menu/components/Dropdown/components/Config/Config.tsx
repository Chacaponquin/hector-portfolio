import { Language, Theme } from './components'

export default function Config() {
  return (
    <div className="flex justify-between w-full">
      <Language />
      <Theme />
    </div>
  )
}
