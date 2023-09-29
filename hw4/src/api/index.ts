export default function request(path: string, options?: RequestInit) {
  return fetch(path, options || {}).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
