
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";

import { usePlayerData } from "../hook/usePlayerData";


export const ItemDetailPage = () => {

  const { isLoading, playersDataByPosition } = usePlayerData();

  return (
    <>
      
      <ItemDetailContainer isLoading={isLoading} playersDataByPosition={playersDataByPosition} />
      
    </>
  );
};
