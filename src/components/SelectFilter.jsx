import React from 'react'

export default function SelectFilter(props) {
  return (
	<div>
	  <form>
			<select name="" id="" onChange={(e) => props.handleTypeChange(e.target.value)}>
			<option value="any">Any</option>
			<option value="bow">Bow</option>
			<option value="claw">Claw</option>
			<option value="dagger">Dagger</option>
			<option value="oneaxe">One Hand Axe</option>
			<option value="onemace">One Hand Mace</option>
			<option value="onesword">One Hand Sword</option>
			<option value="sceptre">Sceptre</option>
			<option value="staff">Staff</option>
			<option value="twoaxe">Two Hand Axe</option>
			<option value="twomace">Two Hand Mace</option>
			<option value="twosword">Two Hand Sword</option>
			<option value="wand">Wand</option>
			<option value="chest">Body Armour</option>
			<option value="boots">Boots</option>
			<option value="gloves">Gloves</option>
			<option value="helmet">Helmet</option>
			<option value="shield">Shield</option>
			<option value="amulet">Amulet</option>
			<option value="belt">Belt</option>
			<option value="ring">Ring</option>
			</select>
			<button onClick={(e) => {props.filterItems(e)}}>Filter Items</button>
	  </form>
	</div>
  )
}
