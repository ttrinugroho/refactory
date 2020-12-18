import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useUser() {
  const { data, mutate, error } = useSWR("/api/auth", fetcher);

  const loading = !data && data && data.status !== 403;
  const loggedOut = data && data.status === 403;

  return {
    loading,
    loggedOut,
    user: data && data.status === 200 ? data : undefined,
    mutate
  };
}