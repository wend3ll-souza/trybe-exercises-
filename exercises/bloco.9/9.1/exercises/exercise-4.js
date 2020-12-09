const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    const messageOfMars = getMarsTemperature();
    setTimeout(() => console.log(`Mars teperature: ${messageOfMars} degree Celsius`), messageDelay)
};


sendMarsTemperature();