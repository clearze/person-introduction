// 往屏幕添加文字，实现打字效果
/**
 *
 * @param {*} text 填充的文字
 * @param {*} dom 渲染的dom元素
 * @param {*} duration 渲染间隔的时间
 */
let i = 0;
const audio = document.querySelector('#audio');
export function drawText(text, dom, duration) {
  audio.play();
  //设置 id 为 demo 的对象内的文字为从变量 text 的 0 开始到 i 间的文字加"_"
  dom.innerHTML = text.slice(0, i++) + '_';
  if (i > text.length) {
    audio.pause();
    return;
  } else {
    //否则在delay毫秒后再次执行writeText()函数
    setTimeout(() => {
      drawText(text, dom, duration);
    }, duration);
  }
}
