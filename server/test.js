const mongoose = require("mongoose");
const User = require("./model/User");
const ConversationHistory = require("./model/ConversationHistory");
mongoose.connect('mongodb://127.0.0.1:27017/connectbee');

// const mes = new Message({
//     text: 'Hello World',
// });
// mes.save();

// const user1 = new User({
//     firstName: 'Samin',
//     lastName: 'Islam',
// })
// const user2 = new User({
//     firstName: 'Agnafath Kabniolu',
//     lastName: 'Naan',
// })
// user1.save();
// user2.save();

const ObjectId = mongoose.Types.ObjectId;
// const conhis = new ConversationHistory({
//     members: [ObjectId("621de15d168e43fc7e7e5874"), ObjectId("621ddf17b8d095c20b717921")],
//     messages: [{ text: 'Hello', sender: ObjectId("621de15d168e43fc7e7e5874") }]
// })

// const x = ConversationHistory.findOneAndUpdate(
//     { _id: ObjectId("621de97cd186e7a2485b2d33")},
//     { $push: {
//             messages: {
//                 sender: ObjectId("621de15d168e43fc7e7e5874"),
//                 text: "HI",
//             },
//         },
//     }
// ).then((doc) =>  {
//     doc.save()
// });

const { getConversation } = require('./model/Message')

getConversation('621de97cd186e7a2485b2d33').then((doc) => {
    console.log(doc)
});

// conhis.save();
