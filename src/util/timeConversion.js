const timeConversion = (secondsTime) => {
  const hourTime = parseInt(secondsTime / 3600);
  const remainedTime = parseInt(secondsTime % 3600);
  const minuteTime = parseInt(remainedTime / 60);

  return `${hourTime}hrs ${minuteTime} min ago`;
};

export { timeConversion };
