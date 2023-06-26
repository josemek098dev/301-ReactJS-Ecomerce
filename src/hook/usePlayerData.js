import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getPlayerData } from '../helpers/getPlayerData';

export const usePlayerData = () => {
  const [playersDataByPosition, setPlayersByPosition] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { position = 'defender'  } = useParams();
  const { id  } = useParams();



  useEffect(() => {
    const fetchData = async () => {
      const playersData = await getPlayerData(position,id); 
      setPlayersByPosition(playersData);
      setIsLoading(false);
    };

    fetchData();
  }, [position,id]);

  return { isLoading, playersDataByPosition };
};
