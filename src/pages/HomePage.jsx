import { BannerStart } from "../components/BannerStart/BannerStart";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { BannerEnd } from "../components/BannerEnd/BannerEnd";
import { usePlayerData } from "../hook/usePlayerData";


export const HomePage = () => {

  const { isLoading, playersDataByPosition } = usePlayerData();
  console.log(playersDataByPosition)

  return (
    <>
      <BannerStart />
      <ItemListContainer isLoading={isLoading} playersDataByPosition={playersDataByPosition} />
      <BannerEnd />
    </>
  );
};
