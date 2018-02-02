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
      </Head>

      <Mainmenu />

      { children }

      <Footer />
      
      <style jsx global>{`
        body {
          margin: 0
        }
      `}</style>
    </div>
  </MuiThemeProvider>
)