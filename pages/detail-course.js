import useSWR from "swr"
import Header from "../components/header/header"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function DeatailCourse() {
  const { data, error } = useSWR('/api/detail-course', fetcher)
  const renderList = (item = []) => {
    return item.map((p, i) => (
      <li key={i} className="course-list-item">
        <a className="course-item-link" href={p.url}>
          <span className="course-item image">
            <img src="https://fedora.teachablecdn.com/assets/icons/youtube-brands-43c32617529d416391eed20028644a3045ecdb646146cc146bc8a6250fec979d.svg" alt="img" />
          </span>
          <span className="course-item">{p.title}</span>
          <span className="course-item">({p['time-in']})</span>
          <span className="course-item space" />
          <span className="course-item button">start</span>
        </a>
      </li>
    ))
  }
  return (
    <div>
      <Header types={2} />
      <section className="header-detail">
        <img src="https://cdn.fs.teachablecdn.com/RBZMT9GSASWBQNBzWhJM" alt="background" className="header-background" />
        <div className="grid t-a-c j-c-c">
          <div className="item item-sm-6">
            <div className="header-detail-title">
              <h1>HTML &amp; CSS Introduction</h1>
              <p>HTML dan CSS adalah materi dasar untuk pengembangan web. Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS.</p>
              <a href="/" style={{ paddingTop: 18, paddingBottom: 18, minWidth: 250 }} className="btn">Mulai Belajar</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb">
        <div className="grid j-c-c t-a-c">
          <div className="item item-sm-6">
            <h4>Tentang Course</h4>
            <p>{data && data["short-description"]}</p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid t-a-c j-c-c">
          <div className="item item-sm-6">
            <div className="item item-xs-12">
              <h2>Materi Course</h2>
            </div>
            <div className="item item-xs-12">
              {data && data["materi course"].map((p, i) => (
                <ul key={i} className="course-list">
                  <li className="course-list-item">
                    <a className="course-item-link" href="#">
                      {p.section}
                    </a>
                  </li>
                  {renderList(p.data)}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}