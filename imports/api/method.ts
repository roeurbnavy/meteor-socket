
import { Meteor } from "meteor/meteor";
import LinksCollection from './links'
import { sockets } from './socket'

Meteor.methods({
  'fetchData': () => {
    // return LinksCollection.find({}).fetch()
    const res = LinksCollection.aggregate([
      { $sort: { title: 1 } }
    ])

    // io.sockets.on('connection', (socket) => {
    //   console.log('res', res.length);
    //   io.emit('fetchData', res)
    // })

    // io.on('disconnect', () => {
    //   console.log('disconnect');
    // })

    return res
  },
  'insertLink': ({ doc }) => {
    sockets.emit('insertLinkId', 20)
    let id
    // // Meteor.setTimeout(() => {
    sockets.emit('insertLinkId', 65)
    id = LinksCollection.insert(doc);
    sockets.emit('insertLinkId', 100)
    // //   return id
    // // }, 2000)
    return id

    // executeMethod(progress => {
    //   sockets.emit('insertLinkId', progress);
    // })
    // console.log('done');
    // return true
  },
  'updateLink': ({ _id, title, url }) => {
    return LinksCollection.update({ _id }, { $set: { title, url } });
  },
  'removeLink': ({ _id }) => {
    return LinksCollection.remove({ _id });
  },
})

const executeMethod = (progressCalback) => {
  const totalStep = 100;
  let currentStep = 0;
  console.log('execute method');
  const interval = Meteor.setInterval(() => {
    currentStep++

    const progress = Math.round((currentStep / totalStep) * 100)
    console.log('progress', progress);
    progressCalback(progress)

    if (currentStep == totalStep) {
      Meteor.clearInterval(interval)
    }
  }, 100)
}