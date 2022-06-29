import {policy} from "../interfaces/policy.interface"
import {filterType} from "../interfaces/filter.interface"

async function getPolicies({queryKey: filters}: {queryKey: Array<filterType>}): Promise<Array<policy>> {
  try {
    let fetchUrl = "http://localhost:4000/policies?"
    for (const filter of filters) {
      fetchUrl = fetchUrl.concat(filter.key, "=", filter.value, "&")
    }
    const result = await fetch(fetchUrl);
    const policies: Array<policy> = await result.json();

    return policies;
  } catch (err) {
    throw new Error('Error while getting data from backend')
  }
}

export {getPolicies};
