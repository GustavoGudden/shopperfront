export function convertSecondsToMinutes(seconds: string) {
  const sec = seconds.split('s');
  const hours = Math.floor(parseInt(seconds) / 3600);
  const minutes = Math.floor(parseInt(seconds) / 60);

  if (hours > 0) {
    return `${hours}H`;
  }

  return `${minutes}M`;
}
