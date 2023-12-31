import { useParams } from "react-router-dom";
import { useContext } from "react";
import HouseContext from "../context/houseContext";
import House from "./";

const HouseFromQuery = () => {
  const { id } = useParams();
  const allHouses = useContext(HouseContext);
  const house = allHouses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found.</div>;
  return <House house={house}></House>;
};

export default HouseFromQuery;
