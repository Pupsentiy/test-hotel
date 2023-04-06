export const currentDate = new Date()
  .toLocaleString("ru")
  .slice(0, 10)
  .split(".")
  .reverse()
  .join("-");

export const getSumDays = (
  currentDate: string | number | Date,
  amountOfDays: any
) => {
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

export const changeFormatDate = (currentDate: string | number | Date) => {
  return new Date(currentDate)
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, 14);
};
