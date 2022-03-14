// LeetCode 71. Simplify Path
const simplifyPath = function (path) {
  const pathArr = path.split('/');
  const directories = [];

  for (const path of pathArr) {
    if (!path || path === '.') continue;
    if (path === '..') {
      directories.length && directories.pop();
    } else {
      directories.push(path);
    }
  }
  return '/' + directories.join('/');
};

// refactor
const HANDLERS = {
  '.': () => {},
  '..': (stack) => stack.length && stack.pop(),
};

const DEFAULT_HANDLER = (stack, ele) => stack.push(ele);

const simplifyPath2 = (path, SLASH = '/') => {
  const parts = path.split(SLASH).filter((p) => p);
  const stack = [];
  for (const part of parts) {
    HANDLERS[part] ? HANDLERS[part](stack) : DEFAULT_HANDLER(stack, part);
  }
  return SLASH + stack.join(SLASH);
};

console.log(simplifyPath2('/home/'));
