#! /usr/bin/env node

import getApp from '../index';
import getConfig from '../config';

const start = async () => {
  const config = getConfig();

  const app = getApp();

  try {
    await app.listen(config.restPort);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
