export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 86400000).toUTCString() // 쿠키 만료 기간 설정
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Strict`
}

export const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  return matches ? matches[2] : undefined
}
