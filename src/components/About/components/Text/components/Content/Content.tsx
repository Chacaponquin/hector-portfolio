import { Strong } from './components'

export default function Content() {
  return (
    <div className="flex flex-col text-lg gap-y-2 md:text-left text-justify w-full">
      <p>
        Soy un estudiante de último año de la carrera <Strong text="Ingeniería Informática" /> y un programador
        fullstack con amplios conocimientos en el uso de tecnologías modernas tanto <Strong text="frontend" /> como{' '}
        <Strong text="backend" />.
      </p>
      <p>
        Apasionado del aprendizaje, la <Strong text="Arquitectura de Software" /> y de la implementación de un código
        limpio, escalable, extensible y testeable.
      </p>
      <p>
        Actualmente estoy buscando nuevas metas que ayuden a mi formación profesional y colaborar en la creación de
        apliaciones útiles para la comunidad junto a equipos que enriquezcan la experiencia.
      </p>
    </div>
  )
}
