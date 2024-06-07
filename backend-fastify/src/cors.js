import FastifyCors from "@fastify/cors";

export const setFastifyCors = function (fastify) {
  fastify.register(FastifyCors, {
    // put your options here
    origin: [
      "http://localhost:9000",
      "http://localhost:8100",
      "http://15.207.86.6:4200",
    ],
  });
};
