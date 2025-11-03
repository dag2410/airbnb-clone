// components/GridContainer.jsx
import ListItems from "@/components/ListItems";

const GridContainer = ({ listing, favorite = false }) => (
  <div className="grid grid-cols-5 gap-x-12 gap-y-5">
    {listing.map((item) => (
      <ListItems key={item.id} data={item} fav={favorite ? true : false} />
    ))}
  </div>
);

export default GridContainer;
