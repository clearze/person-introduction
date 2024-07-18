import { drawText } from './js/drawText.js';
import { canvasStar } from './js/star.js';
const text =
  '你好，很开心你能看到这段文字，也很感谢你能够有耐心来看<br />' +
  '我的个人博客，如果你是路人，希望我分享的文章能够对你有<br />' +
  '所帮助。如果你是面试官，也希望能给我一个面试的机会，本<br />' +
  '人喜爱前端，热爱技术，从小白一步步走到现在经历了许多的<br />' +
  '挫折，也解决了许多大大小小的问题，我相信只要坚持走下去，<br />' +
  '未来肯定会充满希望哦~~~  ^--^';
const demo = document.querySelector('#demo');
const tips = document.querySelector('.tips');
tips.onclick = function () {
  tips.classList.add('animate__bounceOut');
  setTimeout(() => {
    drawText(text, demo, 80);
  }, 1000);
};
canvasStar();
