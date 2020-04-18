export const relativeDate = (date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const now = new Date();
  const difference = now - date;
  const minute = 60 * 1000;
  const hour = 60 * 60 * 1000;
  const day = 60 * 60 * 24 * 1000;
  const week = 60 * 60 * 24 * 7 * 1000;
  const watch = new Intl.RelativeTimeFormat("en", { style: "narrow" });
  if (difference < minute) {
    return "just now";
  } else if (difference < hour) {
    const minutes = Math.floor(difference / minute);
    return watch.format(-1 * minutes, "minutes");
  } else if (difference < day) {
    const hours = Math.floor(difference / hour);
    return watch.format(-1 * hours, "hour");
  } else if (difference < week) {
    const days = Math.floor(difference / day);
    return watch.format(-1 * days, "day");
  } else {
    return date.toLocaleDateString();
  }
};
