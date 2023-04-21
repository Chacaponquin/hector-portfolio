import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function appServices() {
  function getGitHubRepositories() {
    const { data, isLoading, isError } = useQuery(['myRepos'], () =>
      axios.get('https://api.github.com/users/chacaponquin/repos').then((res) => res.data),
    );

    console.log(data);

    return { repositories: data, isError, isLoading };
  }

  return { getGitHubRepositories };
}
