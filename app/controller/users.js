const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller{
  async index(){
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }
  async show() {
    const ctx = this.ctx;
    const data = await ctx.model.User.findByPk(toInt(ctx.params.id));
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
    } = ctx.request.body;
    const user = await ctx.model.User.create({
      user_name,
      user_id,
      password,
      email,
      phone, });
    ctx.status = 201;
    ctx.body = user;
  }
}

module.exports = UserController;