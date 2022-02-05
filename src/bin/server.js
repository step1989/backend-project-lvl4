#! /usr/bin/env node

import { fastify } from "../index";
import {getConfig} from "../config";

const start = async () => {

    const config = getConfig()

    try {
        await fastify.listen(config.restPort)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()