const Controller = require('egg').Controller;

class CategoryController extends Controller{
  async index(){
    const ctx = this.ctx;
    const query = { limit: ctx.helper.parseInt(ctx.query.limit), offset: ctx.helper.parseInt(ctx.query.offset) };
    ctx.body = await ctx.model.Category.finAll(query)
  }
  async show(){
    const ctx = this.ctx;
    const data = await ctx.model.Category.findByPk(ctx.helper.parseInt(ctx.params.id))
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
      sort,
      title,
      desc,
      thumb
    } = ctx.request.body;
    const category = await ctx.model.Category.create({
      sort,
      title,
      desc,
      thumb
    })
    ctx.status = 201;
    ctx.body = category;
  }
  async update(){
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const category = await ctx.model.Category.findByPk(id);
    if (!category) {
      ctx.status = 404;
      return;
    }
    const {
      sort,
      title,
      desc,
      thumb
    } = ctx.request.body;
  }
  async destroy(){

  }
}

module.exports = CategoryController;