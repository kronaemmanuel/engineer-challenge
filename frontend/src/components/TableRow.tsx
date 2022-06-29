import React from "react"
import Badge from "./Badge";
import {policy as policyType} from "../interfaces/policy.interface"

interface TableRowProps {
  policy: policyType;
  index: number
};

const TableRow = ({policy, index}: TableRowProps) => {
  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {policy.customer.firstName} {policy.customer.lastName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {policy.provider}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {policy.insuranceType}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <Badge status={policy.status} />
      </td>
    </tr>
  )
}

export default TableRow

