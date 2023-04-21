import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GitHubRepositoryFetch } from '../interfaces/github.interface';

export function appServices() {
  function useGitHubRepositories() {
    const { isLoading, isError } = useQuery<Array<GitHubRepositoryFetch>>(['myRepos'], () =>
      axios
        .get<Array<GitHubRepositoryFetch>>('https://api.github.com/users/chacaponquin/repos')
        .then((res) => res.data),
    );

    const repositories = [1, 2, 3];

    return { repositories, isError, isLoading };
  }

  return { useGitHubRepositories };
}
