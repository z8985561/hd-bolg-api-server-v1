const Controller = require('egg').Controller;
class UserController extends Controller{
  async index(){
    const ctx = this.ctx;
    const query = { limit: ctx.helper.parseInt(ctx.query.limit), offset: ctx.helper.parseInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }
  async show() {
    const ctx = this.ctx;
    const data = await ctx.model.User.findByPk(ctx.helper.parseInt(ctx.params.id));
    if(data){
      ctx.body = data
    }else{
      ctx.body = {
        code:404
      }
    }

  }
  async create(){
    const ctx = this.ctx;
    const {
      user_name,
      user_id,
      password,
      email,
      phone,
      nick_name,
      avatar
    } = ctx.request.body;
    const user = await ctx.model.User.create({
      user_name,
      user_id,
      password,
      email,
      phone,
      nick_name,
      avatar
      });
    ctx.status = 201;
    ctx.body = user;
  }
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { nick_name, avatar } = ctx.request.body;
    await user.update({ nick_name, avatar });
    ctx.body = user;
  }
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;