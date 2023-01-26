import expressLoader from './express';
const mysql = require("mysql");
export default async app => {
  await expressLoader(app);
  console.log('Express Initialized');

  // ... more loaders can be here
  await mongodbLoader();
  // ... Initialize agenda
};