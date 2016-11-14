import * as React from 'react';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';

export interface AppProps {
  routes: any;
  store: any;
}

class AppContainer extends React.Component<AppProps, any> {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {routes, store} = this.props;

    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Router history={browserHistory} children={routes}/>
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
