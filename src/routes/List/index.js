/**
 * Created by lixiaoyang on 2016/10/29.
 */
import { injectReducer } from '../../store/reducers';

export default store => ({
  path: '／',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const ListContainer = require('./containers/ListContainer').default;
      const listReducer = require('./reducers/listReducer').default;
      injectReducer(store, { key: 'listReducer', reducer: listReducer });
      const editReducer = require('./reducers/editReducer').default;
      injectReducer(store, { key: 'editReducer', reducer: editReducer });
      cb(null, ListContainer);
    }, 'list');
  },
});
