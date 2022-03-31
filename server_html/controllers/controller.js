exports.paramsimage = (req, res) => {
    let thumbnail = req.params.images;
    res.render(`image${thumbnail}`);
  };