import React from 'react'

export default function Item(props) {
  return (
      <div className="items" key={props.item.id}>
        <h3>
          {props.item.name
            ? `${props.item.name} ${props.item.typeLine}`
            : props.item.typeLine}
        </h3>
        <img src={props.item.icon} alt="" />
        <h5>Implicit Mods:</h5>
        {props.item.implicitMods
          ? props.item.implicitMods.map(mod => {
              return <p>{mod}</p>;
            })
          : null}
        <h5>Explicit Mods:</h5>
        {props.item.explicitMods
          ? props.item.explicitMods.map(mod => {
              return <p>{mod}</p>;
            })
          : null}
        <p>ilvl: {props.item.ilvl}</p>
        {props.showCompare ? null : (
          <button
            className="compare-button"
            onClick={() => props.compare(props.item)}
          >
            Add to Compare
          </button>
        )}
        {props.showCompare ? (
          <button
            className="delete-button"
            onClick={() => props.deleteCompare(props.item.id)}
          >
            Delete Item
          </button>
        ) : null}
      </div>
  )
}
