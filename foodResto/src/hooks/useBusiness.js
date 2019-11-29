import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async searchQuery => {
    setIsLoading(true);
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchQuery,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error.toString());
      setIsLoading(false);
    }
  };

  return [searchApi, results, errorMsg, isLoading];
};
