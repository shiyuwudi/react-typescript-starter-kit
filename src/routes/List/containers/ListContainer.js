/**
 * Created by lixiaoyang on 2016/10/29.
 */
import List from '../components/List'
import {connect} from 'react-redux'
import {clearCompleted} from '../actions/action'

const mapDispatchToProps = {
    clearCompleted
}

const mapStateToProps = (state) => ({
    list: state.list
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
