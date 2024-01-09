export interface ExperienceCard {
  position: string
  limits: Limit
  notes: Array<string>
}

export interface Limit {
  init: string
  finish: string
}
