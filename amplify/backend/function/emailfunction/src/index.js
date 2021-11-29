const aws = require("aws-sdk");
const ses = new aws.SES();

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      //pull off items from stream
      const userEmail = streamedItem.dynamodb.NewImage.userEmail.S;
      const restaurantName = streamedItem.dynamodb.NewImage.restaurantName.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: "Order Confirmation" },
            Body: {
              Text: {
                Data: `Hello ${userEmail}. Your order at the restaurant ${restaurantName} has been successfully placed!`,
              },
            },
          },
        })
        .promise();
    }
  }
  return { status: "done" };
};
