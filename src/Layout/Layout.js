import React, { Children } from 'react'
import{Helmet} from'react-helmet'
import Header from './Header';
import Footer from './Footer';
const Layout = ({children,description,author,title}) => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <title>{title}</title>
        </Helmet>
        <Header/>
        <main style={{minHeight:"72vh"}}>
        {children}
        </main>
        <Footer/>
    </div>
  );
};

Layout.defaultProps = {
    title: "Vaishu Tech World - shop now",
    description: "react project",
    author: "VaishuThakur",
  };

export default Layout