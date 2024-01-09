import { useTranslation } from '../../../modules/language/hooks';
import { GithubRepository } from '../interfaces/githubRepository.interface';

export function useGithubSection() {
  const {
    CHAT_BOT_DESCRIPTION,
    CH_FUTBOL_DESCRIPTION,
    CH_MUSIC_DESCRIPTION,
    CH_PORTFOLIO_DESCRIPTION,
    PORTFOLIO_DESCRIPTION,
    PYTHON_APP_DESCRIPTION,
  } = useTranslation({
    PORTFOLIO_DESCRIPTION: {
      en: 'My Online Portfolio updated until 2023. Developed with a new architecture and with new technologies that I have learned.',
      es: 'Mi Portafolio Online actualizado hasta el año 2023. Desarrollado con una arquitectura nueva y con nuevas teconologias que he aprendido.',
    },
    PYTHON_APP_DESCRIPTION: {
      en: 'A statistical application created with python, dedicated to display the data on COVID patients of a region with the use of statistical tables, percentages and graphs.',
      es: 'Una aplicación estadística creada con python, dedicada a mostrar los datos sobre pacientes de COVID de una región con la utilización de tablas estadísticas, porcientos y gráficos.',
    },
    CHAT_BOT_DESCRIPTION: {
      en: 'A simple Chatbot that responds to user input. Trained with a model created by me using PyTorch and implemented on a server to be used as an API in the future.',
      es: 'Un Chatbot simple que responde ante inputs de un usuario. Entrenado con un modelo creado por mí utilizando PyTorch e implementado en un servidor para poder en un futuro ser utilizado como API.',
    },
    CH_FUTBOL_DESCRIPTION: {
      en: 'A server created for an application or video game similar to a Fantasy, containing forms of interaction with players, teams, users, games, etc. Although it is not finished it was a great help for deep learning of GraphQL.',
      es: 'Un servidor creado para una aplicación o videojuego similar a un Fantasy, que contiene formas de interacción con jugadores, equipos, usuarios, juegos, etc. Aunque no está terminado fue de gran ayuda para el aprendizaje profundo de GraphQL.',
    },
    CH_MUSIC_DESCRIPTION: {
      en: 'One of my first web applications that through an API obtains data from any song, shows information about authors, lyrics, among other features.',
      es: 'Una de mis primeras aplicaciones web que a través de una API obtiene datos de cualquier canción, muestra información de autores, líricas, entre otras funcionalidades.',
    },
    CH_PORTFOLIO_DESCRIPTION: {
      en: 'My first portfolio, created in 2021, containing old projects and developed with React. Learning how to implement changing theme, color and language in a web application was quite useful for the first time.',
      es: 'Mi primer portfolio, creado en 2021, que contiene proyectos viejos y desarrollado con React. Fue bastante útil por primera vez el aprendizaje sobre como implementar el cambio de tema, color y lenguaje en una aplicación web.',
    },
  });

  const REPOSITORIES: Array<GithubRepository> = [
    {
      title: 'My Portfolio',
      madeWith: ['React', 'Tailwind CSS', 'Vite', 'Typescript', 'Framer Motion'],
      url: 'https://github.com/Chacaponquin/hector-portfolio',
      description: PORTFOLIO_DESCRIPTION,
    },
    {
      title: 'Python Covid App',
      url: 'https://github.com/Chacaponquin/python-covid-app',
      madeWith: ['Python', 'rich', 'mathplotlib'],
      description: PYTHON_APP_DESCRIPTION,
    },
    {
      title: 'Chat Bot Server',
      madeWith: ['Python', 'PyTorch', 'Fast Api'],
      url: 'https://github.com/Chacaponquin/chat-bot-server',
      description: CHAT_BOT_DESCRIPTION,
    },
    {
      title: 'CH-Futbol Server',
      madeWith: ['Graphql', 'MongoDB', 'Express', 'Cloudinary'],
      url: 'https://github.com/Chacaponquin/ch-futbol-server',
      description: CH_FUTBOL_DESCRIPTION,
    },
    {
      title: 'CH-Music',
      madeWith: ['React', 'Rapid Api'],
      url: 'https://github.com/Chacaponquin/ch-music',
      description: CH_MUSIC_DESCRIPTION,
    },
    {
      title: 'CH-Portfolio',
      madeWith: ['React'],
      url: 'https://github.com/Chacaponquin/ch-portfolio',
      description: CH_PORTFOLIO_DESCRIPTION,
    },
  ];

  return { REPOSITORIES };
}
