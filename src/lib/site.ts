const rawBaseUrl = import.meta.env.BASE_URL;

export const BASE_URL = rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;

export function siteUrl(path = '/') {
  return `${BASE_URL}${path.replace(/^\/+/, '')}`;
}
