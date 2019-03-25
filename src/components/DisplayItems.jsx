import React, { Component } from "react";
import axios from "axios";
import LoadingWrapper from "./LoadingWrapper";
import "../App.css";
import Header from "./Header";
import ItemDisplaySelector from "./ItemDisplaySelector";

export class DisplayItems extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filteredItems: [],
      showCompare: false,
      loading: true,
      type: "any",
      class: true,
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

  handleCompareSwitch = bool => {
    this.setState({
      class : bool
    })
  }

  compareItemsFlag = bool => {
    this.setState({
      showCompare: bool
    });
  };

  handleTypeChange = itemType => {
    this.setState({
      type: itemType
    });
  };

  filterItems = e => {
    e.preventDefault();
    let filterType = "";
    for (let key in this.state.typeObjectValues) {
      if (key === this.state.type) {
        filterType = this.state.typeObjectValues[key];
      }
    }
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
      this.setState({
        filteredItems: filteredItemsTemp
      });
    }
  };

  componentDidMount() {
    axios
      .get("/getAPIResponse")
      .then(res => {
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
        <header>
          <Header
            showCompare={this.state.showCompare}
            compareItemsFlag={this.compareItemsFlag}
            handleTypeChange={this.handleTypeChange}
            filterItems={this.filterItems}
          />
        </header>
        <main>
        <LoadingWrapper loading={this.state.loading}>
          <ItemDisplaySelector
            handleCompareSwitch={this.handleCompareSwitch}
            class={this.state.class}
            filteredItems={this.state.filteredItems}
            filterItems={this.filterItems}
            showCompare={this.state.showCompare}
            items={this.state.items}
          />
        </LoadingWrapper>
        </main>
      </div>
    );
  }
}

export default DisplayItems;
