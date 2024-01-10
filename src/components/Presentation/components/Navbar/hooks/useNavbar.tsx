import { useState } from 'react'
import { useSections } from '../../../../../modules/app/hooks'

export default function useNavbar() {
  const { SECTIONS } = useSections()

  const [openMenu, setOpenMenu] = useState(false)

  function handleChangeOpenMenu() {
    setOpenMenu((prev) => !prev)
  }

  return { SECTIONS, handleChangeOpenMenu, openMenu }
}
