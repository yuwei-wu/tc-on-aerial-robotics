// sort by date
export const sortByDate = (array: any[], order: "asc" | "desc" = "desc") => {
  const getTime = (item: any) =>
    new Date(item?.data?.date ?? 0).valueOf();

  return [...array].sort((a, b) => {
    const diff = getTime(a) - getTime(b);
    return order === "asc" ? diff : -diff;
  });
};

// sort product by weight
export const sortByWeight = (array: any[]) => {
  const withWeight = array.filter(
    (item: { data: { weight: any } }) => item.data.weight,
  );
  const withoutWeight = array.filter(
    (item: { data: { weight: any } }) => !item.data.weight,
  );
  const sortedWeightedArray = withWeight.sort(
    (a: { data: { weight: number } }, b: { data: { weight: number } }) =>
      a.data.weight - b.data.weight,
  );
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};
