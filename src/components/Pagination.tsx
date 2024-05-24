import { useSearchParams } from "react-router-dom";
import Button from "../ui/Button";
import { usersData } from "../utils/types";

function Pagination({ users }: { users: usersData }) {
  // Getting the current page from the url
  const [serchParam, setSearchParam] = useSearchParams();
  const page = serchParam.get("page") || "1";
  let currentPage = "1";
  // setting the totalPages for the pagination from the users data we got from the api
  const totalPages = users.total_pages;

  // If the page is not bigger than totalPages and it is not blow 1 then set its value as the current page
  if (Number(page) >= 1 && Number(page) <= totalPages) {
    currentPage = page;
  }

  function handleNext() {
    // If we are on the last page return, otherwise go to the next page
    if (Number(currentPage) >= totalPages) return;
    const nextPage = Number(currentPage) + 1;
    serchParam.set("page", JSON.stringify(nextPage));
    setSearchParam(serchParam);
  }

  function handlePrevious() {
    // If we are on the first page return, otherwise go to the previous page
    if (Number(currentPage) <= 1) return;
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
