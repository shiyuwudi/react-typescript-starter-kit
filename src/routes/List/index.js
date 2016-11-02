/**
 * Created by lixiaoyang on 2016/10/29.
 */
import { injectReducer } from '../../store/reducers.js';

export default store => ({
  path: '／',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const ListContainer = require('./containers/ListContainer').default;
      const reducer = require('./reducers/reducer').default;
      injectReducer(store, { key: 'list', reducer });
      cb(null, ListContainer);
    }, 'list');
  },
});
