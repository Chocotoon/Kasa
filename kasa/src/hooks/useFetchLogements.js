import { useQuery } from 'react-query';

const useFetchLogements = () => {
    async function fetchData() {
        const res = await fetch('/data/logements.json');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      }

    return useQuery('logements', fetchData);
}

export default useFetchLogements;