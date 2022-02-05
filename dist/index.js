"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fastify = void 0;

var _fastify = _interopRequireDefault(require("fastify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ESM
const fastify = (0, _fastify.default)({
  logger: true
});
exports.fastify = fastify;
fastify.get('/', async (request, reply) => {
  return {
    hello: 'world'
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmYXN0aWZ5IiwibG9nZ2VyIiwiZ2V0IiwicmVxdWVzdCIsInJlcGx5IiwiaGVsbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQURBO0FBRUEsTUFBTUEsT0FBTyxHQUFHLHNCQUFRO0FBQ3BCQyxFQUFBQSxNQUFNLEVBQUU7QUFEWSxDQUFSLENBQWhCOztBQUlBRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxHQUFaLEVBQWlCLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEtBQTBCO0FBQ3ZDLFNBQU87QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBUDtBQUNILENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFU01cbmltcG9ydCBGYXN0aWZ5IGZyb20gJ2Zhc3RpZnknXG5jb25zdCBmYXN0aWZ5ID0gRmFzdGlmeSh7XG4gICAgbG9nZ2VyOiB0cnVlXG59KVxuXG5mYXN0aWZ5LmdldCgnLycsIGFzeW5jIChyZXF1ZXN0LCByZXBseSkgPT4ge1xuICAgIHJldHVybiB7IGhlbGxvOiAnd29ybGQnIH1cbn0pXG5cbmV4cG9ydCB7IGZhc3RpZnkgfSJdfQ==