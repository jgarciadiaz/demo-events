import Link from 'next/link'
import Head from 'next/head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Mainmenu from './mainMenu';
import Footer from './footer';

export default ({ children, title = 'Chicago Events' }) => (
  <MuiThemeProvider>
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="icon" type="image/png" href="http://www.pvhc.net/img46/lopojkylehzltkfgmtcf.png" />
      </Head>

      <Mainmenu />

      { children }

      <Footer />
      
      <style jsx global>{`
        body {
          max-width: 450px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  </MuiThemeProvider>
)
