export const decodeHTML = function(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};