import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
const LinksCollection = new Mongo.Collection("links");

const schema = new SimpleSchema({
  title: String,
  url: {
    type: String,
    optional: true,
  },
});

LinksCollection.attachSchema(schema);

export default LinksCollection;
