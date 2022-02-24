function getDate(tmpstmp) {
  let date = new Date(tmpstmp * 1000);
  const values = date.toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return <>{values}</>;
}

export default getDate;
