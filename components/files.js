import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import Icon1 from '../public/assets/images/folder.svg'
import FThumb from '../public/assets/images/fr33d0m-thumb.jpg'

import styles from './widget.module.sass'

export default function Files() {
  const connected = useSelector((state) => state.users.connected);
  return (
    <>
      <div className={styles.files}>
        <div className={styles.folder} data-connected={connected} data-video="live">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <style jsx>{`
            .fthumb {
              position: absolute;
              width: 80%;
              height: 80%;
              top: 10%;
              left: 5%;
              background: url('${FThumb.src}') no-repeat 50% 50%;
              background-size: cover;
            }
          `}</style>
          <Link className="anchor" href="/freedom">
            <div className="fthumb"/>
          </Link>
          <div className={styles.flabel}>fr33d0m</div>
          </div>
        <div className={styles.folder} data-connected={connected} data-video="preview">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p className={styles.connect}>Connect Wallet</p>
            <span className={styles.connect}>fr33d0m</span>
          </div>
        </div>
        <div className={styles.folder}>
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p>Coming Q3 2022</p>
            <span>r3v0lut10n</span>
          </div>
        </div>
        <div className={styles.folder}>
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p>Coming Q4 2022</p>
            <span>cha05</span>
          </div>
        </div>
        <div className={styles.folder}>
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p>Coming ??? </p>
            <span>???</span>
          </div>
        </div>
        <div className={styles.folder}>
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p>Coming ??? </p>
            <span>???</span>
          </div>
        </div>
        <div className={styles.folder}>
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p>Coming ??? </p>
            <span>???</span>
          </div>
        </div>
        <div className={styles.folder}>
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p>Coming ??? </p>
            <span>???</span>
          </div>
        </div>
        <div className={styles.folder}>
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <div className={styles.fcontent}>
            <p>Coming ??? </p>
            <span>???</span>
          </div>
        </div>
      </div>
    </>
  )
}