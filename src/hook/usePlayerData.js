import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getPlayerData } from '../helpers/getPlayerData';

export const usePlayerData = () => {
  const [playersDataByPosition, setPlayersByPosition] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { position } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const playersData = await getPlayerData(position); 
      setPlayersByPosition(playersData);
      setIsLoading(false);
    };

    fetchData();
  }, [position]);

  return { isLoading, playersDataByPosition };
};
