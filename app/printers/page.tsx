import React from "react";
import Search from "../ui/search";
import { Suspense } from "react";
import PrintersTable from "../ui/printers/printersTable";
import Pagination from "@/app/ui/pagination";
import { fetchPrinterPages } from "../lib/data";

const PrintersPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchPrinterPages(query);

  return (
    <div className="my-4 py-5 text-center">
      <h3>Printerek</h3>
      <Search placeholder="printer neve vagy cikkszáma..." />
      <Suspense key={query + currentPage} fallback={""}>
        <PrintersTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-1 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default PrintersPage;
