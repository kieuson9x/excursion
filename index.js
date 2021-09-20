let messageArr = [];

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const messagesObj = {
  country: ["Vietnam", "Lao", "Cambodia"],
  animal: ["monkey", "elephant", "horse", "duck"],
  action: ["love", "like", "hate", "miss"],
};

for (let prop in messagesObj) {
  const index = generateRandomNumber(messagesObj[prop].length);
  const value = messagesObj[prop][index];
  let message;
  switch (prop) {
    case "country":
      message = `I guess you come from ${value}.`;
      break;
    case "animal":
      message = `There's a ${value} in front of you.`;
      break;
    case "action":
      message = `You might ${value} it!`;
      break;
    default:
      message = `Haha`;
  }

  messageArr.push(message);
}
console.log(messageArr.join("\n"));
