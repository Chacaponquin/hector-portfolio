import { APP_IMAGES } from '../../../../../../../../../../../../modules/app/constants'
import { LANGUAGES } from '../../../../../../../../../../../../modules/language/constants'
import { Button } from './components'

export default function Language() {
  return (
    <div className="flex items-center gap-x-3.5">
      <Button language={LANGUAGES.EN} image={APP_IMAGES.FLAGS.US} />
      <Button language={LANGUAGES.ES} image={APP_IMAGES.FLAGS.SPAIN} />
    </div>
  )
}
