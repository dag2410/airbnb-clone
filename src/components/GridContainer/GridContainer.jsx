// components/GridContainer.jsx
import ListItems from "@/components/ListItems";
import { useFavoriteIds } from "@/hooks/useFavoriteIds";

const GridContainer = ({ listing }) => {
  const favoriteIds = useFavoriteIds();

  return (
    <div className="grid grid-cols-5 gap-x-10 gap-y-5">
      {listing.map((item) => (
        <ListItems
          key={item.id}
          data={item.room}
          fav={favoriteIds?.has(item.room.id)}
        />
      ))}
    </div>
  );
};
export default GridContainer;
