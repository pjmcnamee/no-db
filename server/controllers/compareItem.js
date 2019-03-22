let compareItems = [];

module.exports = {
  create: (req, res) => {
    let item = req.body;
    compareItems.push(item);
    res.send(compareItems);
  },
  delete: (req, res) => {
    let { id } = req.params;

    let index = compareItems.findIndex(item => item.id === id);
    compareItems.splice(index, 1);
    res.send(compareItems);
  }
};
