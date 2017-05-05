import Helmet from 'react-helmet';
import React from 'react';

const {NODE_ENV, PUBLIC_URL} = process.env;
const URL = 'https://www.jeffhanson.me';
const TITLE = 'Jeff Hanson';
const DESCRIPTION = 'Jeff Hanson - Product Engineer & Designer';
const TRACKING_ID = 'UA-97568200-1';
const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '${TRACKING_ID}', 'auto');
  ga('send', 'pageview');
`;

export default (
  <Helmet
    htmlAttributes={{lang: 'en'}}
    title={TITLE}
    meta={[
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {charset: 'utf-8'},
      {name: 'description', content: DESCRIPTION},
      {property: 'og:url', content: URL},
      {property: 'og:type', content: 'website'},
      {property: 'og:locale', content: 'en_US'},
      {property: 'og:title', content: TITLE},
      {property: 'og:site_name', content: TITLE},
      {property: 'og:description', content: DESCRIPTION},
      {property: 'al:web:url', content: URL},
      {name: 'twitter:site', content: '@jshanson7'},
      {name: 'twitter:url', content: URL},
      {name: 'twitter:title', content: TITLE},
      {name: 'twitter:description', content: DESCRIPTION},
    ]}
    link={[
      {rel: 'shortcut icon', href: `${PUBLIC_URL}/favicon.ico`},
      {rel: 'canonical', href: URL}
    ]}
    script={[NODE_ENV === 'production' ? {innerHTML: ga} : {}]}
  />
);