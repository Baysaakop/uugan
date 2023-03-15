import { useState, useEffect } from 'react'
import styles from '../styles/NavbarFooter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navlinks = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('/')

    useEffect(() => {
        setActiveLink(router.asPath)
    }, [router.asPath])

    return (
        <>
            <div className={styles.navlinks}>
                <Link href='/'><a style={{ opacity: activeLink === '/' || activeLink === '/#work' ? '100%' : '80%' }}>Home</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#about'><a style={{ opacity: activeLink === '/#about' ? '100%' : '80%' }}>About</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/gallery'><a style={{ opacity: activeLink === '/gallery' ? '100%' : '80%' }}>Gallery</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/contact'><a style={{ opacity: activeLink === '/contact' ? '100%' : '80%' }}>Contact</a></Link>
            </div>
            <div className={styles.navlinks} style={{ background: '#44bd32', borderRadius: '2px', color: '#fff' }}>
                <Link href='/fund'><a style={{ opacity: activeLink === '/fund' ? '100%' : '80%' }}>Fund</a></Link>
            </div>
        </>

    )
}

export default Navlinks
