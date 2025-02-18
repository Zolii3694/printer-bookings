import React from "react";
import Pagination from "@/app/ui/pagination";
import Search from "../ui/search";
import { Suspense } from "react";
import BookersTable from "../ui/bookers/bookersTable";
import { fetchBookerPages } from "../lib/data";

const BookersPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchBookerPages(query);

  return (
    <div className="my-4 py-5 text-center">
      <h3>Ügyfelek</h3>
      <Search placeholder="ügyfél neve, címe vagy email-címe..." />
      <Suspense key={query + currentPage} fallback={""}>
        <BookersTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-1 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default BookersPage;
