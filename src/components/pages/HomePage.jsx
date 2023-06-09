
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { DealsContainer } from "../DealsContainer/DealsContainer";
import { CategoriesContainer } from "../CategoriesContainer/CategoriesContainer";
import { CarouselEcart } from "../CarouselEcart/CarouselEcart";

export const HomePage = () => {
  return (
    <>
      <CarouselEcart />
      <ItemListContainer />
      <DealsContainer />
      <CategoriesContainer />
    </>
  )
}
