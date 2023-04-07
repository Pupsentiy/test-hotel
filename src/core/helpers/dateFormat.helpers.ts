export const currentDate: string = new Date()
  .toLocaleString("ru")
  .slice(0, 10)
  .split(".")
  .reverse()
  .join("-");

export const getSumDays = (
  currentDate: string,
  amountOfDays: number
): string => {
  return new Date(
    new Date(currentDate).setDate(
      new Date(currentDate).getDate() + Number(amountOfDays)
    )
  )
    .toLocaleString("ru")
    .slice(0, 10)
    .split(".")
    .reverse()
    .join("-");
};

export const changeFormatDate = (currentDate: string): string => {
  return new Date(currentDate)
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, 14);
};
