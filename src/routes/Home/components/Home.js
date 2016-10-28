import React, {Component} from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {Button} from 'antd';

import {Hello} from "./Hello";

let data = [{
    ip: '192.168.1.197',
    name: 'erp服务器',
    status: '运行中'
}, {
    ip: '192.168.1.198',
    name: '商城服务器',
    status: '运行中'
}, {
    ip: '192.168.1.199',
    name: '分销服务器',
    status: '运行中'
}
];

class Home extends Component {

    constructor(props) {
        super(props);
    }

    onRowSelection = (e)=> {
        if (e == 'none')return;
        let ipArr;
        if (e == 'all') {
            ipArr = data.map(obj=>obj.ip);
        } else {
            ipArr = e.map(obj=>data[obj].ip);
        }
        this.setState({
            ipArr
        });
        console.log(ipArr);
    };

    shutdown = ()=> {
        let {ipArr}=this.state;
        this.props.shutdown(ipArr);
    };

    render() {
        return (<div>
            <RaisedButton label="关机"
                          secondary={true}
                          onClick={this.shutdown}
                          style={{
                              margin: 12,
                          }}/>

            <Button type="primary">删除</Button>

            <Hello compiler="TypeScript" framework="React"/>

            <Table
                selectable={true}
                multiSelectable={true}
                onRowSelection={this.onRowSelection}
            >
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>IP</TableHeaderColumn>
                        <TableHeaderColumn>名称</TableHeaderColumn>
                        <TableHeaderColumn>状态</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data.map(obj=><TableRow>
                            <TableRowColumn>{obj.ip}</TableRowColumn>
                            <TableRowColumn>{obj.name}</TableRowColumn>
                            <TableRowColumn>{obj.status}</TableRowColumn>
                        </TableRow>)
                    }
                </TableBody>
            </Table>

        </div>)
    }
}


export default Home
