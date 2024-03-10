export const  formattedDate=(inputDate)=> {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[inputDate.getMonth()];
    const date = `${inputDate.getDate()} ${monthName} ${inputDate.getFullYear()}`;
    const time = inputDate.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    return {date,time}
  }