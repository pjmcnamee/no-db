import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";
import SearchButton from "./SearchButton";
import CompareButton from "./CompareButton";
import SelectFilter from "./SelectFilter";
import FilterItems from "./FilterItems";
import LoadingWrapper from "./LoadingWrapper";
import "../App.css";

export class DisplayItems extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      compareItems: [],
      filteredItems: [],
      showCompare: false,
      loading: true,
      type: "any",
      typeObjectValues: {
        amulet: "accessories",
        helmet: "armour",
        bow: "weapons",
        ring: "accessories",
        belt: "accessories",
        gloves: "armour",
        onemace: "weapons",
        onesword: "weapons",
        oneaxe: "weapons",
        twomace: "weapons",
        twosword: "weapons",
        twoaxe: "weapons",
        claw: "weapons",
        dagger: "weapons",
        sceptre: "weapons",
        staff: "weapons",
        wand: "weapons",
        boots: "armour",
        shield: "armour",
        chest: "armour"
      }
    };
  }

  compareItemsFlag = bool => {
    this.setState({
      showCompare: bool
    });
  };

  addToCompare = item => {
    axios
      .post("/api/compare", item)
      .then(res => {
        this.setState({
          compareItems: [...this.state.compareItems, item]
        });
      })
      .catch(err => console.log("Adding to compare failed ", err));
  };

  handleTypeChange = itemType => {
    this.setState({
      type: itemType
    });
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

  filterItems = e => {
    e.preventDefault();
    let filterType = "";
    for (let key in this.state.typeObjectValues) {
      if (key === this.state.type) {
        filterType = this.state.typeObjectValues[key];
      }
    }

    console.log(filterType);
    if (this.state.type === "any") {
      this.setState({
        filterItems: []
      });
    } else {
      let filteredItemsTemp = this.state.items.filter(item => {
        if (item.category[filterType]) {
          return item.category[filterType][0] === this.state.type;
        }
      });
      console.log(filteredItemsTemp);
      this.setState({
        filteredItems: filteredItemsTemp
      });
    }
  };

  componentDidMount() {
    axios
      .get("/getAPIResponse")
      .then(res => {
        console.log(res.data);
        console.log(res.data.stashes);
        let holder = [];
        res.data.stashes.forEach(item => {
          if (item.public === true) {
            item.items.forEach(item => {
              holder.push(item);
            });
          }
        });
        this.setState({
          items: holder,
          loading: false
        });
      })
      .catch(err => console.log("Failed to search for items ", err));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="nav-container top-fixed">
            {this.state.showCompare ? (
              <SearchButton compare={this.compareItemsFlag} />
            ) : (
              <CompareButton compare={this.compareItemsFlag} />
            )}
          </div>
          <div className="filter-container top-fixed">
            {this.state.showCompare ? null : (
              <SelectFilter
                filterItems={this.filterItems}
                handleTypeChange={this.handleTypeChange}
              />
            )}
          </div>
          <LoadingWrapper loading={this.state.loading}>
            <div className="items-holder">
              {this.state.showCompare ? (
                this.state.compareItems.map(item => {
                  return (
                    <Item
                      item={item}
                      deleteCompare={this.deleteCompare}
                      showCompare={this.state.showCompare}
                      compare={this.addToCompare}
                    />
                  );
                })
              ) : (
                <FilterItems
                  showCompare={this.state.showCompare}
                  addToCompare={this.addToCompare}
                  items={this.state.items}
                  filteredItems={this.state.filteredItems}
                />
              )}
            </div>
          </LoadingWrapper>
        </div>
      </div>
    );
  }
}

export default DisplayItems;
