const countriesName = [
  'Финляндия',
  'Великобритания',
  'Россия',
  'Германия',
  'Япония',
  'Нидерланды',
  'Испания',
  'ОАЭ',
  'Австралия',
  'Швеция',
];

const LyleScottGeography = () => (
  <section className="mt-4 pb-3 light-gray-background horizontal-padding-20 planet-section">
    <h3 className="jost-500 mb-4">
      Мы стремительно растем и выходим за рамки Европы — чтобы то самое чувство гордости и причастности Lyle & Scott
      было знакомо как можно большему числу людей.
    </h3>
    <div className="planet-map-wrapper">
      <div className="planet-map">
        {countriesName.map((countryName, index) => (
          <div className={`country country-${index + 1}`} key={index}>
            <div className="country-flag"></div>
            <p className="name">{countryName}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LyleScottGeography;
