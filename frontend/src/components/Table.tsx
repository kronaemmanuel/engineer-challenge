import React from "react";
import {useQuery} from "react-query";

import TableHead from "./TableHead"
import TableBody from "./TableBody";
import {getPolicies} from "../utilities/getPolicies";
import {useFilter} from "../utilities/useFilter";

const Table = () => {
  const [searchFilter, setSearchFilter] = useFilter("search", "")
  const {isLoading, isError, data: policies} = useQuery([searchFilter],
    getPolicies,
    {
      // To prevent from going into loading state while fetching new data which
      // causes search input to lose focus
      keepPreviousData: true
    }
  );

  return (
    <div>
      <div>
        <form>
          <label htmlFor="searchValue" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input onChange={e => setSearchFilter(e.target.value)} value={searchFilter.value} type="text" id="searchValue" name="searchValue" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search policies" />
            <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg shadow-sm">
              {isLoading && <p>Loading!!!</p>}
              {isError && <p>Error encountered</p>}
              <table className="min-w-full">
                <TableHead />
                <TableBody policies={policies} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;
