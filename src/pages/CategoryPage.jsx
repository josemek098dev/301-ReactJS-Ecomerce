import { AllItemsContainer } from '../components/AllItemsContainer/AllItemsContainer';
import { usePlayerData } from "../hook/usePlayerData";

export const ByCategoryItemContainerPage = () => {
  const { isLoading, playersDataByPosition } = usePlayerData();

  return (
    <>
      <h1>holanda</h1>
      <AllItemsContainer isLoading={isLoading} playersData={playersDataByPosition} />
    </>
  );
};
