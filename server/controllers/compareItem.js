let compareItems = [];

module.exports = {
  create: (req, res) => {
    let item = req.body;
    let check = compareItems.find(search => {
      return search.id === item.id;
    });
    if (check === undefined) {
      compareItems.push(item);
    }
    res.send(compareItems);
  },
  delete: (req, res) => {
    let { id } = req.params;
    let index = compareItems.findIndex(item => item.id === id);
    compareItems.splice(index, 1);
    res.send(compareItems);
  }
};
