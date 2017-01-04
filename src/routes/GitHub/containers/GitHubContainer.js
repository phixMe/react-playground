import { connect } from 'react-redux';
import { gitHubLogin, loadCategories } from '../modules/github';
import GitHub from '../components/GitHub';

const mapDispatchToProps = {
  gitHub: () => gitHubLogin(),
  loadCategories: () => loadCategories(),
};

const mapStateToProps = (state) => ({
  gitHubResponse : state.gitHubResponse,
  category: state.category
});

export default connect(mapStateToProps, mapDispatchToProps)(GitHub);
