// formattedDate function formats the inputDate into a readable date and time format
export const formattedDate = (inputDate) => {
  // Array of month names
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  // Get the month name corresponding to the month of inputDate
  const monthName = monthNames[inputDate.getMonth()];

  // Construct the date string in the format: Day Month Year
  const date = `${inputDate.getDate()} ${monthName} ${inputDate.getFullYear()}`;

  // Get the time string in the format: Hour:Minute AM/PM
  const time = inputDate.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

  // Return an object containing the formatted date and time
  return { date, time };
}
