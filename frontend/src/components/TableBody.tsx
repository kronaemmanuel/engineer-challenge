import {policy as policyType} from "../interfaces/policy.interface"
import TableRow from "./TableRow"

interface TableBodyProps {
  policies?: Array<policyType>;
}

const TableBody = ({policies}: TableBodyProps) => {
  console.log(policies)
  return (
    <tbody>
      {policies &&
        policies.map((policy, index) => (
          <TableRow policy={policy} index={index} key={policy.id} />)
        )}
    </tbody>
  )
}

export default TableBody
