import useSWR from "swr"
import Link from 'next/link'

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import useUser from "../libs/user";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { mutate } = useUser()
  const { data, error } = useSWR('/api/partner', fetcher)
  const { data: see, err } = useSWR('/api/as-see-on', fetcher)

  if (error) return <div>Failed to load</div>
  if (err) return <div>Failed to load</div>

  return (
    <div className="site">
      <Header types={1} />
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-wrap">
            <div className="hero-header">
              <h1 className="hero-title">Empowering <span style={{ color: '#e48800' }}>People</span> Through Programming</h1>
              <p className="hero-description">Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.</p>
            </div>
            <div className="hero-act">
              <Link href="/">
                <a className="btn">
                  <span>temukan solusi anda</span>
                </a>
              </Link>
              <Link href="/enroll" className="btn outlined">
                <a className="btn outlined">
                  <span>Tingkatkan Skill Anda</span>
                </a>
              </Link>
            </div>
            <div className="hero-partner">
              Partner Eksklusif Kami
            </div>
            <div className="hero-slider">
              <div className="hero-slider-wrap">
                <ul style={{ display: 'flex', justifyContent: 'center', margin: 0, alignItems: 'center', listStyle: 'none' }}>
                  {data ? data.data.map((p, i) => (
                    <li key={i} style={{ margin: '0 20px' }}>
                      <img src={p.photo_url} alt="mandiri" />
                    </li>
                  )) : <div>Loading...</div>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid t-a-c grid-5">
          <div className="item item-xs-12"></div>
          <div className="item item-sm-12">
            <h2>Apa Yang Refactory Dapat Bantu?</h2>
          </div>
          <div className="item item-md-6">
            <h2>Memperkuat Tim Engineer Anda</h2>
            <p>Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda.</p>
          </div>
          <div className="item item-md-6">
            <h2>Wujudkan Software Impian Anda</h2>
            <p>Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk</p>
          </div>
        </div>
      </section>
      <div className="bg-img mb">
        <section className="container">
          <div className="grid t-a-c grid-4">
            <div className="item item-xs-12">
              <h3>INSIGHT TERBARU</h3>
            </div>
            <div className="item item-xs-12">
              <h3>Knowledge Sharing</h3>
            </div>
          </div>
        </section>
      </div>
      <section className="container">
        <div className="grid t-a-c grid-4">
          <div className="item item-xs-12">
            <div className="item item-xs-12">
              <Link href=""><a><span>Lihat Semua</span><span></span></a></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid a-i-c j-c-c t-a-c grid-4">
          <div className="item item-xs-12">AS SEEN ON</div>
          {see ? see.data.map((p, i) => (
            <div key={i} className="item item-xs-auto">
              <img src={p.photo_url} alt="mandiri" />
            </div>
          )) : <div>Loading...</div>}
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}