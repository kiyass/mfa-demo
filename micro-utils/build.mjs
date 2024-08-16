#!/usr/bin/env node
import { __internalHelper, logger } from '@rsbuild/core';

const { runCli, prepareCli } = __internalHelper;

async function main() {
  prepareCli();

  try {
    runCli();
  } catch (err) {
    logger.error(err);
  }
}

main();
