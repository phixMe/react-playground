import { connect } from 'react-redux';
import { gitHubLogin } from '../modules/counter';
import GitHub from '../components/GitHub';

const mapDispatchToProps = {
  gitHub: () => gitHubLogin(),
};

const mapStateToProps = (state) => ({
  counter : state.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(GitHub);
