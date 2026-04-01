// components/GridContainer.jsx
import ListItems from "@/components/ListItems";

const GridContainer = ({ listing, isLike = false }) => (
  <div className="grid grid-cols-5 gap-x-12 gap-y-5">
    {listing.map((item) => (
      <ListItems key={item.id} data={item} fav={isLike ? true : false} />
    ))}
  </div>
);

export default GridContainer;
