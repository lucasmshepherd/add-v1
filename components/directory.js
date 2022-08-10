import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../store/users/action'
import Link from 'next/link'
import parse from 'html-react-parser'

import styles from './directory.module.sass'

export default function Directory(props) {
  var folder, arrow, lock, exlink
  const dispatch = useDispatch();
  const connected = useSelector((state) => state.users.connected);
  const widgets = props.widgets

  function loginUserNow() {
    dispatch(loginUser());
  };

  folder = parse('<svg class="icon-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><g><rect x="15" y="30" width="30" height="15"/><rect y="14.99" width="15" height="105.01"/><rect x="45" y="45" width="75" height="15"/><rect x="120" y="60" width="15" height="60"/><rect x="15" y="120" width="105" height="15"/></g><g><rect x="15" width="30" height="15"/><rect x="45" y="15" width="75" height="15"/><rect x="120" y="30" width="15" height="30"/></g></svg>')
  arrow = parse('<svg class="icon-arrow" width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M5.21793 0.969727V2.83831L3.04271 4.12316H9.80615C9.80615 4.11741 9.80615 4.11486 9.80615 4.11486L9.81348 5.75824H3.04597L5.21467 7.04118V8.96973L0.129678 5.76654V4.11295L5.21793 0.969727Z" /></svg>')
  lock = parse('<svg class="icon-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><g><rect x="15" y="30" width="30" height="15"/><rect y="14.99" width="15" height="105.01"/><rect x="45" y="45" width="75" height="15"/><rect x="120" y="60" width="15" height="60"/><rect x="15" y="120" width="105" height="15"/></g><g><rect x="15" width="30" height="15"/><rect x="45" y="15" width="75" height="15"/><rect x="120" y="30" width="15" height="30"/></g></svg>')
  exlink = parse('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><polygon points="135 120 135 135 0 135 0 0 15 0 15 105 30 105 30 120 135 120"/><rect x="30" y="90" width="15" height="15"/><rect x="45" y="75" width="15" height="15"/><rect x="60" y="60" width="15" height="15"/><rect x="75" y="45" width="15" height="15"/><rect x="90" y="30" width="15" height="15"/><polygon points="135 0 135 60 120 60 120 30 105 30 105 14.99 75 14.99 75 0 135 0"/></svg>')
  
  if(widgets != 'freedom') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>
          <li data-current={ widgets == "home" ? 'true' : 'false' }>
            <Link className="anchor" href="/">
                <a>{folder}<span>root</span>{arrow}</a>
            </Link>
          </li>
          <li data-connected="true" data-current={ widgets == "tv" ? 'true' : 'false' }>
            <Link className="anchor" href="/tv">
              <a>{lock}<span>anarchist_tv</span>{arrow}</a>
            </Link>
          </li>
          <li data-connected="true" data-current={ widgets == "manifesto" ? 'true' : 'false' }>
            <Link className="anchor" href="/manifesto">
              <a>{lock}<span>manifesto</span>{arrow}</a>
            </Link>
          </li>
          <li><a href="https://anarchistdevelopmentdao.gitbook.io/anarchist-development-dao/" rel="noreferrer" target="_blank"><span>faq.gitbook</span></a></li>
        </ul>
      </>
    )
  } else {
    return (
      <> 
        <ul id="menu" className={styles.menu}>
          <li data-current={ widgets == "home" ? 'true' : 'false' }>
            <Link className="anchor" href="/tv">
              <a><span>back</span>{arrow}</a>
            </Link>
          </li>
        </ul>
      </>
    )
  }
}