const Controller = require('egg').Controller;

class ArticleController extends Controller{
  async index(){
    const ctx = this.ctx;
    const query = { limit: ctx.helper.parseInt(ctx.query.limit), offset: ctx.helper.parseInt(ctx.query.offset) };
    ctx.body = await ctx.model.Article.findAll(query)
  }
  async show(){
    const ctx = this.ctx;
    const data = await ctx.model.Article.findByPk(ctx.helper.parseInt(ctx.params.id))
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
      cid,
      sort,
      title,
      sub_title,
      desc,
      thumb,
      label,
      content,
      is_recommend,
      is_hot,
      is_show,
      pv
    } = ctx.request.body;
    const article = await ctx.model.Article.create({
      cid,
      sort,
      title,
      sub_title,
      desc,
      thumb,
      label,
      content,
      is_recommend,
      is_hot,
      is_show,
      pv
    })
    ctx.status = 201;
    ctx.body = article;
  }
  async update(){
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const article = await ctx.model.Article.findByPk(id);
    if (!article) {
      ctx.status = 404;
      return;
    }
    const {
      cid,
      sort,
      title,
      sub_title,
      desc,
      thumb,
      label,
      content,
      is_recommend,
      is_hot,
      is_show,
      pv
    } = ctx.request.body;
    await article.update({
      cid,
      sort,
      title,
      sub_title,
      desc,
      thumb,
      label,
      content,
      is_recommend,
      is_hot,
      is_show,
      pv
    })
    ctx.body = {article,msg:"123"};
  }
  async destroy(){
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const article = await ctx.model.Article.findByPk(id);
    if (!article) {
      ctx.status = 404;
      return;
    }
    await article.destroy();
    ctx.status = 200;
  }
}

module.exports = ArticleController;