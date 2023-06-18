export async function fetchCars({
  manufacturer,
  year,
  model,
  limit,
  fuel,
}: {
  manufacturer: string;
  year: number;
  model: string;
  limit: number;
  fuel: string;
}) {
  const headers = {
    "X-RapidAPI-Key": "bf013a72dbmsh14b5e44f3905abfp1170f5jsnd3be793c51b7",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
