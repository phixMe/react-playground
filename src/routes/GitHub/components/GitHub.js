import React from 'react';

export const GitHub = (props) => (
  <div style={{ margin: '0 auto' }} >
    <button className='btn btn-default' onClick={props.gitHub}>
      Login with GitHub
    </button>
    <button className='btn btn-default' onClick={props.loadCategories}>
      Load Categories
    </button>
    {props.gitHubResp}
  </div>
);

GitHub.propTypes = {
  gitHubResp: React.PropTypes.object,
  gitHub : React.PropTypes.func.isRequired,
  loadCategories: React.PropTypes.func.isRequired,
  category: React.PropTypes.object
};

export default GitHub;
