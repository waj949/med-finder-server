module.exports = validateUserCoordinates = (req, res, next) => {
  const [lng, lat] = JSON.parse(req.params.coordinates);

  if ((lng - 180) * (lng + 180) <= 0 && (lat - 90) * (lat + 90) <= 0) {
    console.log("emmmm delicious coordinates 😆");
    req.params.coordinates = [lng, lat];
    next();
  } else {
    return res
      .status(400)
      .send(
        `not a valid cordinates, we resived ${lat} for Latitude and ${lng} for Longitude`
      );
  }
};
