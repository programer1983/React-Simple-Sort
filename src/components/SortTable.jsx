import {useState} from "react"
import MokData from "./../MOCK_DATA.json"

export default function SortTable() {
  const [data, setData] = useState(MokData)
  const [order, setOrder] = useState("ASC")

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
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


