function calculate() {
    const distance = document.getElementById('distance').value;
    const distanceUnit = document.getElementById('distanceUnit').value;
    const time = document.getElementById('time').value;
    const timeUnit = document.getElementById('timeUnit').value;
    const speed = document.getElementById('speed').value;
    const speedUnit = document.getElementById('speedUnit').value;
  
    let distanceValue, timeValue, speedValue;
  
    // Convert distance to meters
    distanceValue = distanceUnit === 'kilometers' ? distance * 1000 : distance;
  
    // Convert time to seconds
    switch (timeUnit) {
      case 'seconds':
        timeValue = time;
        break;
      case 'minutes':
        timeValue = time * 60;
        break;
      case 'hours':
        timeValue = time * 3600;
        break;
    }
  
    // Convert speed to m/s
    switch (speedUnit) {
      case 'mps':
        speedValue = speed;
        break;
      case 'kmph':
        speedValue = speed / 3.6; // Convert km/h to m/s
        break;
      case 'kmpmin':
        speedValue = speed * 0.0046296;
        break;
    }
  
    let result;
  
    // Calculate the missing value
    if (!distance) {
        result = `Distance = ${(speedValue * timeValue / (distanceUnit === 'kilometers' ? 1000 : 1)).toFixed()} ${distanceUnit === 'kilometers' ? 'km' : 'm'}`;
      } else if (!time) {
        const calculatedTime = distanceValue / speedValue;
        const hours = Math.floor(calculatedTime / 3600);
        const minutes = Math.floor((calculatedTime % 3600) / 60);
        const seconds = Math.floor(calculatedTime % 60);
        result = `Time = ${hours} hours, ${minutes} minutes, ${seconds.toFixed()} seconds`;
      } else if (!speed) {
        result = `Speed = ${(distanceValue / timeValue * (speedUnit === 'kmph' ? 3.6 : 1)).toFixed()} ${speedUnit === 'kmph' ? 'km/h' : 'm/s'}`;
      }
  
    document.getElementById('result').textContent = result;
  }