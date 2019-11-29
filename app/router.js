'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.resources('users', '/users', controller.users);
  // router.get("/users/:id",controller.users.show)
  // router.post("/users/create",controller.users.create)
  // router.get("/demo",controller.demo.index)
};
