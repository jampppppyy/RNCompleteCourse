import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {title: `Blog Post #${state.length + 1}`}];
    default:
      return {
        ...state,
      };
  }
};

export const BlogProvider = ({children}) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => dispatch({type: 'ADD'});

  return (
    <BlogContext.Provider value={{state, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
