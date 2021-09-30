/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponent';
import DashboardContainer from './container/DashboardContainer';

const mapState = (state) => ({
  id: state.user.id,
  email: state.user.email,
});

function App() {
  return (
    <>
      <HeadComponent />
      <DashboardContainer />
      <FooterComponent />
    </>
  );
}

export default connect(mapState)(App);
