export default function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      // 공백 필터
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      // name에 맞는 cookie가 있으면 return
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
