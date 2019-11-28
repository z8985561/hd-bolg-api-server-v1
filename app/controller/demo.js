const Controller = require('egg').Controller;

class DomeController extends Controller{
  index(){
    const ctx = this.ctx;
    ctx.body = "<h1>111111111</h1>";
  }
}

module.exports = DomeController;