import { useSections } from '../../../../../modules/app/hooks'

export default function useNavbar() {
  const { SECTIONS } = useSections()

  return { SECTIONS }
}
