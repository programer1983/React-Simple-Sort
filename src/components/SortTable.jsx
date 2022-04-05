import {useState} from "react"
import MokData from "./../MOCK_DATA.json"

export default function SortTable() {
  const [data, setData] = useState(MokData)
  const [order, setOrder] = useState("ASC")

  const sorting = (col) => {
    if(order === "ASC"){
      const sorted = [...data].sort((a, b) =>
         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      )
      setData(sorted)
      setOrder("DSC")
    }

    if(order === "DSC"){
      const sorted = [...data].sort((a, b) =>
         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      )
      setData(sorted)
      setOrder("ASC")
    }
  }

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <th onClick={() => sorting("first_name")} className="click">First Name</th>
          <th onClick={() => sorting("last_name")} className="click">Last Name</th>
          <th onClick={() => sorting("email")} className="click">Email</th>
          <th onClick={() => sorting("gender")} className="click">Gender</th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.first_name}</td>
              <td>{d.last_name}</td>
              <td>{d.email}</td>
              <td>{d.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


