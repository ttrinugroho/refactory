import Link from "next/link"
import useSWR from "swr"
import Header from "../components/header/header"

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Enroll() {
  const { data, error } = useSWR('/api/list-course', fetcher)
  return (
    <div>
      <Header types={2} />
      <section className="container">
        <div className="grid grid-4">
          <div className="item item-xs-12"></div>
          <div className="item item-xs-12">
            <div className="grid grid-8">
              <div className="item item-sm-3 item-xs-true"></div>
              <div className="item item-sm-6 item-xs-true"></div>
              <div className="item item-sm-3 item-xs-12">
                <input type="text" placeholder=" search..." className="form-input" id="search" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-4">
          {data ? data.data.map((p, i) => (
            <div key={i} className="item item-md-4">
              <a href="/detail-course" className="card">
                <img src={p.photo_url} alt={p.title} />
                <div className="card-title">
                  <h3>{p.title}</h3>
                </div>
                <div className="card-desc">
                  {p.short_description}
                </div>
                <div className="card-author">
                  <div className="card-avatar">
                    <img src={p.user && p.user.photo_url} alt={p.user && p.user.name} />
                  </div>
                  <div className="card-name">
                    {p.user && p.user.name}
                  </div>
                </div>
              </a>
            </div>
          )) : null}
          <div className="item item-xs-12"></div>
        </div>
      </section>
      <footer className="navbar">
        <div className="container">
          <div className="grid grid-6">
            <div className="item-xs-12 item">
              <p>Refactory</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}