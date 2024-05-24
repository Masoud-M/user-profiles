import { useSearchParams } from "react-router-dom";
import Button from "../ui/Button";
import { usersData } from "../utils/types";

function Pagination({ users }: { users: usersData }) {
  const [serchParam, setSearchParam] = useSearchParams();
  const currentPage = serchParam.get("page") || "1";

  const totalPages = users.total_pages;

  function handleNext() {
    if (Number(currentPage) === totalPages) return;
    const nextPage = Number(currentPage) + 1;
    serchParam.set("page", JSON.stringify(nextPage));
    setSearchParam(serchParam);
  }

  function handlePrevious() {
    if (Number(currentPage) === 1) return;
    const prevPage = Number(currentPage) - 1;
    serchParam.set("page", JSON.stringify(prevPage));
    setSearchParam(serchParam);
  }
  return (
    <div className="flex items-center justify-center w-full text-lg font-bold ">
      <Button
        disabled={Number(currentPage) === 1}
        label="Previous"
        onClick={() => handlePrevious()}
      />
      <div className="mx-4 ">{users.page}</div>
      <Button
        disabled={Number(currentPage) === totalPages}
        label="Next"
        onClick={() => handleNext()}
      />
    </div>
  );
}

export default Pagination;
