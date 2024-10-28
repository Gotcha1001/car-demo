"use client";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //serach states

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //pagination state
  const [limit, setLimit] = useState(12);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  // const params = await searchParams;
  // const {
  //   manufacturer = "",
  //   year = 2024,
  //   fuel = "",
  //   limit = 10,
  //   model = "",
  // } = params || {};

  // const allCars = await fetchCars({
  //   manufacturer,
  //   year,
  //   fuel,
  //   limit,
  //   model,
  // });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden gradient-background2">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-white">Car Catalog</h1>
          <p className="text-gray-400 font-bold">
            Explore the cars you might like
          </p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container text-white">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <RevealWrapper
              effect="fade"
              duration={1000}
              distance="20px"
              delay={200}
            >
              <div className="home__cars-wrapper">
                {allCars.map((car, index) => (
                  <RevealWrapper
                    key={`${car.make}-${car.model}-${car.year}-${index}`}
                    effect="fade"
                    duration={1000}
                    distance="20px"
                    delay={index * 150} // Increase delay for each car
                  >
                    <CarCard car={car} />
                  </RevealWrapper>
                ))}
              </div>
            </RevealWrapper>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
