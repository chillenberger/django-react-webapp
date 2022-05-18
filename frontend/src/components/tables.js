import React from 'react'

const data = [
    {id:1, status:'shipped', loc:'MN'},
    {id:2, status:'shipped', loc:'TX'}];

const md = [1,2,3]

const listItems = data.map((d) =>
  <div className='tableRow'>
    <div>{d.id}</div>
    <div>{d.status}</div>
    <div>{d.loc}</div>
  </div>
)

const ShipmentTable = () => {
  return (
    <div className="tableBody">
      <div className="tableRow">
        <div className="tableHeadItem">Tracking ID</div>
        <div className="tableHeadItem">Status</div>
        <div className="tableHeadItem">Location</div>
      </div>
      {
        listItems
      }
    </div>
  )
}



export {
  ShipmentTable
}
