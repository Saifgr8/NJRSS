export const filterData = (clickedRestaurant, searchText) => {
    return clickedRestaurant.filter((restaurant) =>
      restaurant?.title?.toLowerCase().includes(searchText?.toLowerCase())
    );
  };