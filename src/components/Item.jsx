import React, { Component } from "react";

export class Item extends Component {
  constructor() {
    super();
    this.state = {
      classFlag: true,
      className: "items normal"
    };
  }

  handleClassFlag = bool => {
    this.setState({
      classFlag: bool
    });
  };

  changeBasedOnKey = (key, bool) => {
    let { id } = this.props.item;
    let classFlagHolder = "items normal";

    this.handleClassFlag(bool);

    if (this.state.classFlag === false) {
      if (id === key) {
        this.setState({
          className: "items switch"
        });
      }
    }

    this.setState({
      classFlag: classFlagHolder
    });
  };

  render() {
    let {
      id,
      typeLine,
      icon,
      explicitMods,
      ilvl,
      implicitMods,
      name
    } = this.props.item;
    return (
      <div className={this.state.className} key={id}>
        <h3>{name ? `${name} ${typeLine}` : typeLine}</h3>
        <img src={icon} alt="" />
        <h5>Implicit Mods:</h5>
        {implicitMods
          ? implicitMods.map(mod => {
              return <p>{mod}</p>;
            })
          : null}
        <h5>Explicit Mods:</h5>
        {explicitMods
          ? explicitMods.map(mod => {
              return <p>{mod}</p>;
            })
          : null}
        <p>ilvl: {ilvl}</p>
        {this.props.showCompare ? null : (
          <button
            className="compare-button"
            onClick={() => this.props.compare(this.props.item, false)}
          >
            Add to Compare
          </button>
        )}
        {this.props.showCompare ? (
          <button
            className="delete-button"
            onClick={() => this.props.deleteCompare(this.props.item.id)}
          >
            Delete Item
          </button>
        ) : null}
      </div>
    );
  }
}

export default Item;
