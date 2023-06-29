import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getPlayerData } from '../helpers/getPlayerData';

export const usePlayerData = () => {

  const [playersDataByPosition, setPlayersByPosition] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { category = 'phone' } = useParams();

  const { id } = useParams();

 
  useEffect(() => {
    
    const fetchData = async () => {
      const playersData = await getPlayerData(category, id);
      setPlayersByPosition(playersData);
      setIsLoading(false);
    };


    
    fetchData();
  }, [category, id]);

  return { isLoading, playersDataByPosition };

};
