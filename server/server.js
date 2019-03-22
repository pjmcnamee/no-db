const express = require("express");
const itemController = require("./controllers/items");
const compareController = require("./controllers/compareItem");

const app = express();
const PORT = 3333;

app.use(express.json());

//items

app.get('/getAPIResponse', (req,res) => {
	itemController.make_API_call('http://api.pathofexile.com/public-stash-tabs').then(response => {
		res.json(response)
	}).catch(error => console.log('error in api call ', error))
})


//Compare
app.post("/api/compare", compareController.create);
app.delete("/api/compare/:id", compareController.delete);

app.listen(PORT, () => console.log(`🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 🛠 ${PORT}`));
