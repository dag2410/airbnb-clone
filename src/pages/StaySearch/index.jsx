import { useState } from "react";
import ListResult from "./component/ListResult";
import FilterDialog from "./component/FilterDialog";

export default function StaySearch() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleApplyFilter = () => {
    console.log("Đã áp dụng bộ lọc!");
  };
  return (
    <div className="py-5 bg-white">
      <ListResult openDialog={() => setOpenFilter(true)} />

      <FilterDialog
        open={openFilter}
        onOpenChange={setOpenFilter}
        onApply={handleApplyFilter()}
      />
    </div>
  );
}
