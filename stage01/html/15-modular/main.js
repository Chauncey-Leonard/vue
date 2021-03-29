var name = 'Chauncey';
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(1, 2))
}

// 导出方式一
export { name, flag, sum }

// 导出方式二
export var height = 80;

// 导出方式三
const fly = 'fly';
export default fly
