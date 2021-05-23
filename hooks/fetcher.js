export const fetcher = async (url, headers = {}, method) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/${url}`,
    {
      headers: headers,
      method,
    }
  );
  const data = await response.json();
  return data;
};
