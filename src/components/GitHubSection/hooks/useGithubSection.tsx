import { GithubRepository } from '../interfaces/githubRepository.interface';

export function useGithubSection() {
  const REPOSITORIES: Array<GithubRepository> = [
    {
      title: 'My Portfolio',
      madeWith: ['React', 'Taiwind CSS', 'Vite', 'Typescript'],
      url: 'https://github.com/Chacaponquin/hector-portfolio',
    },
    {
      title: 'Python Covid App',
      url: 'https://github.com/Chacaponquin/python-covid-app',
      madeWith: ['Python', 'rich', 'mathplotlib'],
    },
    {
      title: 'Chat Bot Server',
      madeWith: ['Python', 'PyTorch', 'Fast Api'],
      url: 'https://github.com/Chacaponquin/chat-bot-server',
    },
    {
      title: 'CH-Futbol Server',
      madeWith: ['Graphql', 'MongoDB', 'Express', 'Cloudinary'],
      url: 'https://github.com/Chacaponquin/ch-futbol-server',
    },
    { title: 'CH-Music', madeWith: ['React', 'Rapid Api'], url: 'https://github.com/Chacaponquin/ch-music' },
    { title: 'CH-Portfolio', madeWith: ['React'], url: 'https://github.com/Chacaponquin/ch-portfolio' },
  ];

  return { REPOSITORIES };
}
