export const amountIdenticalData = (apartments) => {
  return apartments.reduce((acc, apartment) => {
    acc[apartment.city] = (acc[apartment.city] || 0) + 1;
    return acc;
  }, {});
};

export const countSelectedCottages = (selectedArr, arr) => {
  return selectedArr.reduce((acc, cottage) => {
    const count = arr.filter((item) => item.options.includes(cottage)).length;
    acc[cottage] = count || 0;
    return acc;
  }, {});
};
export const foundSortedCities = (selectedArr, arr) => {
  const filteredApartments = arr.filter((apartment) => {
    return selectedArr.includes(apartment.city);
  });

  const uniqueCities = (apartments) => {
    const cities = [];

    apartments.forEach((apartment) => {
      if (!cities.includes(apartment.city)) {
        cities.push(apartment.city);
      }
    });

    return cities.sort((a, b) => {
      return selectedArr.indexOf(a) - selectedArr.indexOf(b);
    });
  };
  return uniqueCities(filteredApartments);
};

export const foundSortedCottages = (selectedArr, arr) => {
  const filteredCottages = arr.filter((item) => {
    return item.options.some((option) => selectedArr.includes(option));
  });

  const uniqueCottages = (cottages) => {
    const uniqueOptions = [];

    cottages.forEach((item) => {
      item.options.forEach((option) => {
        if (!uniqueOptions.includes(option) && selectedArr.includes(option)) {
          uniqueOptions.push(option);
        }
      });
    });

    return uniqueOptions.sort((a, b) => {
      return selectedArr.indexOf(a) - selectedArr.indexOf(b);
    });
  };

  return uniqueCottages(filteredCottages);
};

