import {useState} from "react";

import {filterType} from "../interfaces/filter.interface"

function useFilter(key: string, value: string): Array<filterType | any> {
  const [filter, setFilter] = useState<filterType>({key: key, value: value});

  const setFilterValue = (value: string) => {
    setFilter((prevFilter: filterType) => ({key: prevFilter.key, value: value}))
  }

  return [filter, setFilterValue]
}

export {useFilter}
