import React from 'react';
import Table from 'react-bootstrap/Table';
import chartdatas from '../chartdatas.json';
import './tabledata.scss';

const TableData = () => {
  return (
    <div className='tableDiv'>
        <Table responsive>
      <thead>
        <tr className='heading'>
          <th>Resource Id</th>
          <th>Days</th>
          <th>Metrics</th>
          <th>Allocation Id</th>
        </tr>
      </thead>
      <tbody>
				{
					chartdatas.tableData.map((colData, i) => {
						return (
								<tr key={i}>
									<td>
										{
											colData.ResourceId
										}
									</td>
									<td>
										{
											colData.Days
										}
									</td>
									<td>
										{
											colData.Metrics
										}
									</td>
									<td>
										{
											colData.AllocationId
										}
									</td>
								</tr>
						)
					})
				}
      </tbody>
    </Table>
    </div>
  )
}

export default TableData