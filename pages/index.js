import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons'; 

const SocialRow = ({link}) => {
  const [isHover, setIsHover] = useState(false); 
  const onMouseEnter = () => setIsHover(true); 
  const onMouseLeave = () => setIsHover(false); 
  return (
    <SocialIcon 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    bgColor={isHover ? null : '#fcc632' } url={link} target='_blank'/>
  );
};

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      
      <div className={utilStyles.headingMd}>
          
        <p >Hi I'm Matt, a software engineer based out of Toronto.<br></br> Check out my GitHub, or contact me on my socials below.</p>
      </div>
      <div className={utilStyles.socialRow}>
        <SocialRow link={"https://github.com/matthewnads"}/>
        <SocialRow link={"https://www.linkedin.com/in/nadarajah/"}/>
        <SocialRow link={"mailto:matthewnadarajah@gmail.com"}/>
      </div>
    </Layout>
  );
}