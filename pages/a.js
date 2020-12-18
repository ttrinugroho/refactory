import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function A() {
  const { data, error } = useSWR('/api/partner', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div style={{background:"red"}}>
      <ul>
        {data.data.map((p, i) => (
          <img src={p.photo_url} key={i} />
        ))}
      </ul>
    </div>
  )
}
