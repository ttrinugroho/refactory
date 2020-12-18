import Link from "next/link"
import useSWR from "swr"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Courses() {
  const { data, error } = useSWR('/api/report-alumni', fetcher)
  if (error) return <div>Failed to load</div>
  return (
    <div className="site">
      <Header></Header>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-wrap course">
            <div className="hero-header">
              <h1 className="hero-title">Tingkatkan <span style={{ color: '#e48800' }}>skill pemrograman</span> kapan pun, dimana pun.</h1>
              <p className="hero-description">We’re a brand of passionate software engineers and educators with an engaging curriculum backed by real-world software projects ready to boost your career.</p>
            </div>
            <div className="hero-act course">
              <Link href="/">
                <a className="btn">
                  <span>Masuk &amp; Memulai Belajar</span>
                </a>
              </Link>
              <Link href="/enroll" className="btn outlined">
                <a className="btn outlined">
                  <span>Daftar Sekarang</span>
                </a>
              </Link>
            </div>
          </div>
          <div style={{ width: '100%', height: '165px' }}></div>
        </div>
      </section>
      <section className="container mb">
        <div className="grid j-c-c">
          <div className="item item-md-10">
            <div className="grid grid-4">
              <div className="item item-md-6">
                <p style={{ fontSize: 28, padding: '0 20px' }}>Bagaimana Refactory Course membantu <span style={{ color: '#e48800' }}>meningkatkan skill</span> anda.</p>
                <Link href="/enroll"><a className="btn">Pelajari Lebih</a></Link>
              </div>
              <div className="item item-md-6">
                <img style={{ width: "100%", height: 'auto' }} src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png" alt="imersive" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb">
        <div className="grid grid-4">
          <div className="item item-md-6">
            <h3>Kursus pemrograman untuk semua orang tanpa terkecuali</h3>
            <p>Refactory Course dirancang untuk memudahkan setiap orang mampu meningkatkan keahlian dalam software engineering tanpa dibatasi oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun usia.</p>
            <p>Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi keahlian yang sudah diperoleh dalam studi sehingga dapat membuka kesempatan tak terbatas pada karir software engineering.</p>
            <p>Bagi karyawan atau tenaga profesional, Refactory Course dapat meningkatkan keahlian software engineer dalam menunjang menyelesaikan tugas pekerjaannya tanpa khawatir dengan keterbatasan waktu.</p>
            <p>Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk meningkatkan keahlian sehingga mampu berkarya dan mendapat keuntungan karir tanpa khawatir mahalnya belajar.</p>
            <Link href="/"><a className="btn mb-1">daftar sekarang</a></Link>
          </div>
          <div className="item item-md-6">
            <img style={{ width: '100%', height: 'auto' }} src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1" alt="daftar sekarang" />
          </div>
        </div>
      </section>
      <section className="container mb">
        <div className="grid j-c-c grid-3">
          {data ? data.data.map((p, i) => (
            <div key={i} className="item item-md-3">
              <div className="testimony">
                <div>
                  <img src={p.user.photo_url} alt="" />
                </div>
                <h4>{p.user.name}</h4>
                <p>{p.user.from}</p>
                <p>{p.description}</p>
              </div>
            </div>
          )) : <div>Loading...</div>}
        </div>
      </section>
      <section style={{
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(90deg, #127BCA 0%, #35B4AE 100%)',
        padding: '60px 0'
      }}>
        <div className="grid j-c-c">
          <div className="item">
            Ready to start Learning? <Link href="/"><a className="btn mb-1">Daftar Sekarang</a></Link>
          </div>
        </div>
      </section>
      <section className="container mb">
        <div className="grid t-a-c j-c-c">
          <div className="item-xs-12 mb-1 item">
            <p>LANGKAH MUDAH</p>
          </div>
          <div className="item-xs-12 mb-1 item">
            <h4>Memulai Belajar di <span style={{ display: 'block' }}>Refactory Course</span></h4>
          </div>
          <div className="item-xs-12 mb-1 item">
            <img src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?resize=1024%2C199&ssl=1" alt="belajar" />
          </div>
          <div className="item-xs-12 mb-1 item">
            <Link href="/"><a className="btn mb-1">Pelajari Lebih</a></Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}