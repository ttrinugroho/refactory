import { useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

import useUser from "../../libs/user";
import { logout } from "../../libs/auth";


export default function Header({ types = 1 }) {
  const { user, loading, mutate } = useUser();
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (!user) {
      router.push(
        {
          pathname: '/login',
          query: { redirect: pathname }
        }
      );
    }
  }, [user]);

  const pn = (params) => pathname === params ? " active" : "";

  if (loading) return <div>Loading...</div>
  if (types == 1) {
    return (
      <div className="site-header">
        <div className="header">
          <header className="header-inner">
            <div className="header-logo">
              <Link href="/">
                <a>
                  <img src="https://refactory.id/wp-content/uploads/2020/01/refactory-hd-125x52.png" alt="logo" />
                </a>
              </Link>
            </div>
            <nav className="navigation">
              <div className="navigation-items">
                <div className={"navigation-item" + pn('/')}>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </div>
                <div className={"navigation-item" + pn('/courses')}>
                  <Link href="/courses">
                    <a>Courses</a>
                  </Link>
                </div>
                <div className="navigation-item">
                  <a href="/">Custom Trainings</a>
                </div>
                <div className="navigation-item">
                  <a href="/">Case Studies</a>
                </div>
                <div className="navigation-item">
                  <a href="/">Blog</a>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    )
  } else {
    return (
      <div className="navbar">
        <div className="container navbar-inner">
          <Link href="/">
            <a className="navbar-logo">
              <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/SQaHwR3NQii4vEWEdBeg" alt="logo" />
            </a>
          </Link>
          <nav className="navbar-mobile">
            <ul className="nav-items">
              <li className="nav-item">
                {user && user.status ?
                  (<Link href="/"><a>Welcome:{user.user}</a></Link>) :
                  (<Link href="/"><a>Login</a></Link>)
                }
              </li>
            </ul>
          </nav>
          <nav className="nav">
            <ul className="nav-items">
              <li className="nav-item">
                <Link href="/courses"><a>Course</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/"><a>Roadmap</a></Link>
              </li>
              <li className="nav-item">
                {user && user.status ?
                  (<Link href="/"><a>Welcome:{user.user}</a></Link>) :
                  (<Link href="/"><a>Login</a></Link>)
                }
              </li>
              <li className="nav-item">
                {!user ? (<Link href="/"><a className="btn">Sign Up</a></Link>) :
                  (<button onClick={() => {
                    logout();
                    mutate();
                  }} className="btn">LogOut</button>)
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}