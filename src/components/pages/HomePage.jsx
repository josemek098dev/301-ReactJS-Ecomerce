import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { BannerStart } from "../BannerStart/BannerStart";
import { BannerEnd } from "../BannerEnd/BannerEnd";

export const HomePage = () => {
  return (
    <>
      <BannerStart/>
      <ItemListContainer />    
      <BannerEnd/>
    </>
  )
}
