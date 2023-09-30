"use client"
import Giscus from '@giscus/react';
import React from 'react';

export const GiscusComponent = () => {
  return (
    <Giscus
       id="comments"
       repo="tejasghlade/giscus-feedback-comments"
       repoId="R_kgDOKaYn0Q"
       category="Announcements"
       categoryId="DIC_kwDOKaYn0c4CZw36"
       mapping="pathname"
       term="Welcome to @giscus/react component!"
       reactionsEnabled="1"
       emitMetadata="0"
       inputPosition="top"
       theme="dark"
       lang="en"
       loading="lazy"
    />
  )
}



// data-repo="tejasghlade/giscus-feedback-comments"
// data-repo-id="R_kgDOKaYn0Q"
// data-category="Announcements"
// data-category-id="DIC_kwDOKaYn0c4CZw36"
// data-mapping="pathname"
// data-strict="0"
// data-reactions-enabled="1"
// data-emit-metadata="0"
// data-input-position="bottom"
// data-theme="dark"
// data-lang="en"
// crossorigin="anonymous"