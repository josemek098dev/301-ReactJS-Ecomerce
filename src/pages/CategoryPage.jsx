import { AllItemsContainer } from '../components/AllItemsContainer/AllItemsContainer';
import { usePlayerData } from "../hook/usePlayerData";

export const ByCategoryItemContainerPage = () => {

  const { isLoading, playersDataByPosition } = usePlayerData();



  return (
    <>
      <br />
      <br />
      <AllItemsContainer isLoading={isLoading} playersData={playersDataByPosition} />
    </>
  );
};
