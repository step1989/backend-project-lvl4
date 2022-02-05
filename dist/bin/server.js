#! /usr/bin/env node
"use strict";

var _index = require("../index");

var _config = require("../config");

const start = async () => {
  const config = (0, _config.getConfig)();

  try {
    await _index.fastify.listen(config.restPort);
  } catch (err) {
    _index.fastify.log.error(err);

    process.exit(1);
  }
};

start();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vc2VydmVyLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwiY29uZmlnIiwiZmFzdGlmeSIsImxpc3RlbiIsInJlc3RQb3J0IiwiZXJyIiwibG9nIiwiZXJyb3IiLCJwcm9jZXNzIiwiZXhpdCJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOztBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxZQUFZO0FBRXRCLFFBQU1DLE1BQU0sR0FBRyx3QkFBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTUMsZUFBUUMsTUFBUixDQUFlRixNQUFNLENBQUNHLFFBQXRCLENBQU47QUFDSCxHQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZILG1CQUFRSSxHQUFSLENBQVlDLEtBQVosQ0FBa0JGLEdBQWxCOztBQUNBRyxJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxDQUFiO0FBQ0g7QUFDSixDQVZEOztBQVlBVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiIyEgL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0IHsgZmFzdGlmeSB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHtnZXRDb25maWd9IGZyb20gXCIuLi9jb25maWdcIjtcblxuY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmFzdGlmeS5saXN0ZW4oY29uZmlnLnJlc3RQb3J0KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBmYXN0aWZ5LmxvZy5lcnJvcihlcnIpXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbn1cblxuc3RhcnQoKSJdfQ==