import clsx from 'clsx'
import { Limit } from '../../interfaces'
import { Note, Point } from './components'

interface Props {
  notes: Array<string>
  position: string
  limit: Limit
  odd: boolean
}

export default function ExpCard({ limit, position, odd, notes }: Props) {
  const CARD_CLASS = clsx(
    'relative',
    'flex flex-col justify-center',
    'w-full',
    'shadow-md',
    'py-5 px-10',
    'bg-dark-blue-10',
    'rounded',
    {},
  )

  const CONTAINER_CLASS = clsx('flex w-full', { 'pl-7': odd, 'pr-7': !odd }, { 'col-end-2 col-start-2': odd })

  return (
    <div className="grid grid-cols-2">
      <div className={CONTAINER_CLASS}>
        <div className={CARD_CLASS}>
          <Point odd={odd} />

          <h1 className="font-fontSemiBold text-xl mb-2">{position}</h1>

          <p className="mb-1 text-scale-11 text-base">{`${limit.init} - ${limit.finish}`}</p>

          <ul>
            {notes.map((note, index) => (
              <Note key={index} text={note} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
