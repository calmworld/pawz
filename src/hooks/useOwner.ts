import { useQuery } from '@apollo/client';
import { GET_OWNER } from '../queries/GET_OWNER';



export const useOwner = (id: string) => {
    const { loading, error, data } = useQuery(GET_OWNER, {
      variables: {
        id,
      },
  });

    const errorMessage = error ? `Error: ${error.message}` : null;

    return { loading, error: errorMessage, data };
}
