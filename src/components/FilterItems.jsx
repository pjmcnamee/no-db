import React, { Component } from "react";
import Item from "./Item";

export class filter extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="items-holder">
        {this.props.filteredItems.length > 0
          ? this.props.filteredItems.map(item => {
              return (
                <Item
                  showCompare={this.props.showCompare}
                  item={item}
                  compare={this.props.addToCompare}
                />
              );
            })
          : this.props.items.map(item => {
              return (
                <Item
                  showCompare={this.props.showCompare}
                  item={item}
                  compare={this.props.addToCompare}
                />
              );
            })}
        }
      </div>
    );
  }
}

export default filter;
