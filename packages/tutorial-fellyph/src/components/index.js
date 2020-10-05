import React from 'react';
import { Global, connect } from 'frontity';
import globalStyles from '../styles/globalStyles';
import FontFace from '../styles/fontFace';
import { Post } from './post/post.js';
import { Header } from './header/header';

const Theme = ({state}) => {
  const data = state.source.get(state.router.link);
  
  return (
    <>
      <FontFace />
      <Global styles={globalStyles} />
      <Header title="Nosso Primeiro tema com Frontity" />
      { data.items.map( item => {
          const post = state.source.post[item.id]
          return ( <Post key={post.id} post={post} /> )
        })
      }
    </>
  );
};

export default connect(Theme);
  