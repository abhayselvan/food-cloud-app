const aws = require("aws-sdk");
const ses = new aws.SES();

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      //pull off items from stream
      const userEmail = streamedItem.dynamodb.NewImage.userEmail.S;
      const restaurantName = streamedItem.dynamodb.NewImage.restaurantName.S;
      const orderId = streamedItem.dynamodb.NewImage.orderId.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [userEmail],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: "FoodCloud - Order Confirmation" },
            Body: {
              Text: {
                Data: `Hello ${userEmail}. Your order at the restaurant ${restaurantName} has been successfully placed! Order ID for reference: ${orderId}.`,
              },
            },
          },
        })
        .promise();
    }
  }
  return { status: "done" };
};
