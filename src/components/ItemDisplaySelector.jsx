import React, { Component } from "react";
import Item from "./Item";
import FilterItems from "./FilterItems";
import axios from "axios";

export class ItemDisplaySelector extends Component {
  constructor() {
    super();
    this.state = {
      compareItems: []
    };
  }

  addToCompare = item => {
    axios
      .post("/api/compare", item)
      .then(res => {
        this.setState({
          compareItems: [...res.data]
        });
      })
      .catch(err => console.log("Adding to compare failed ", err));
  };

  deleteCompare = id => {
    axios
      .delete(`/api/compare/${id}`)
      .then(res => {
        this.setState({
          compareItems: res.data
        });
      })
      .catch(err => console.log("error in deleting item ", err));
  };

  render() {
    return (
      <div className="items-holder">
        {this.props.showCompare ? (
          this.state.compareItems.map(item => {
            return (
              <Item
                item={item}
                deleteCompare={this.deleteCompare}
                showCompare={this.props.showCompare}
                compare={this.addToCompare}
              />
            );
          })
        ) : (
          <FilterItems
            showCompare={this.props.showCompare}
            addToCompare={this.addToCompare}
            items={this.props.items}
            filteredItems={this.props.filteredItems}
          />
        )}
      </div>
    );
  }
}

export default ItemDisplaySelector;
