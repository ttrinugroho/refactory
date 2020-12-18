import { useEffect } from "react";
import { useRouter } from 'next/router'

import { login } from "../libs/auth"
import useUser from "../libs/user"
import Link from "next/link";


export default function Login() {
  const { user, loading, mutate } = useUser();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (user) {
      router.push({
        pathname: query ? query.redirect : '/'
      })
    }
  }, [user]);
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <Link href="/">
            <a className="navbar-logo">
              <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/SQaHwR3NQii4vEWEdBeg" alt="logo" />
            </a>
          </Link>
        </div>
      </div>
      <div style={{ transform: 'translateY(25%)' }}>
        <div className="grid j-c-c a-i-c">
          <div className="item item-md-5">
            <div className="login-box">
              <h1 className="login-title">
                Log In to Refactory
              </h1>
              <form className="grid grid-4" onSubmit={(e) => {
                e.preventDefault()
                login();
                mutate();
              }}>
                <div className="item item-xs-12">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-input" id="email" />
                </div>
                <div className="item item-xs-12">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-input" id="password" />
                </div>
                <div className="item item-xs-12 form-check">
                  <button type="submit" className="btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}