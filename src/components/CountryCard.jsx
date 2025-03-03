import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={country.flags.png} alt={country.name.common} className="w-full h-32 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{country.name.common}</h2>
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Región: {country.region}</p>
      <Link to={`/country/${country.cca3}`} className="text-blue-500">
        Más detalles
      </Link>
    </div>
  );
};

export default CountryCard;
