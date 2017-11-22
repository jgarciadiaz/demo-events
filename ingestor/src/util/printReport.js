const printReport = (info) => {
  const newEvents = info ? info.reduce((sum, value) => (value ? sum + 1 : sum), 0) : 0;
  console.log(`${newEvents} events created`);
};

export default printReport;
