import React from 'react';

export const GitHub = (props) => (
  <div style={{ margin: '0 auto' }} >
    <button className='btn btn-default' onClick={props.gitHub}>
      Login with GitHub
    </button>
  </div>
);

GitHub.propTypes = {
  gitHub : React.PropTypes.func.isRequired,
};

export default GitHub;
