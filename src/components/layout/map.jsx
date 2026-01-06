  //`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;

export default function Maps() {
  const loc = {
    lat: 13.04006853146465,
    lng: 80.17761999806316
  };

  const openMap = () => {
    const url =  `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;
    window.open(url, "_blank");
  };

  return (_)
}
