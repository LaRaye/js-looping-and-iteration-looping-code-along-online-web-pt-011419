function writeCards(namesArray, eventName) {
  const thankYouArray = [];
  
  for (let i = 0; i < namesArray.length; i++) {
    thankYouArray.push(`"Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!"`);
    
  return thankYouArray;
  }
}
