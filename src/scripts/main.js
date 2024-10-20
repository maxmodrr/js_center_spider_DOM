'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left =
  Math.round(wall.offsetWidth - spider.clientWidth) / 2 + 'px';

spider.style.top =
  Math.round(wall.offsetHeight - spider.clientHeight) / 2 + 'px';
