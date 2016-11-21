/**
 * Created by lixiaoyang on 16/4/14.
 */
import * as React from "react";
import {Popover, Button, Checkbox} from 'antd';
import Sortable from 'sortablejs';

export interface SearchInputProps {
  columns: any[],
  handleColumnChange: (key: any) => void,
  select_columns: any,
  style: any
}

export default class ColumnPicker extends React.Component<SearchInputProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      select_columns: false,
      sorted: false
    };
  }


  handleVisibleChange = (visible: any) => {
    this.setState({visible});
  };


  reSort = (newarr: any)=> {
    this.setState({
      newarr: newarr,
      sorted: true
    });
    this.props.handleColumnChange(newarr);
  };


  sortableGroupDecorator = (componentBackingInstance: any)=> {
    let select_columns = this.state.select_columns;
    let handleColumnChange = this.reSort;
    // check if backing instance not null
    if (componentBackingInstance) {
      let options = {
        draggable: "div", // Specifies which items inside the element should be sortable
        group: "shared",
        animation: 150,
        ghostClass: "sortable-ghost",  // Class name for the drop placeholder
        chosenClass: "sortable-chosen",  // Class name for the chosen item
        onEnd: function (/**Event*/evt: any) {
          var itemEl = evt.from;
          let arr = [];
          let mylist = itemEl.childNodes;
          for (let i = 0; i < mylist.length; i++) {
            var li = mylist[i].childNodes[0];
            arr.push(li.innerText)
          }

          let newarr = [];
          for (let i in arr) {
            for (let j in select_columns) {
              if (arr[i] == select_columns[j].title)
                newarr.push(select_columns[j]);
            }
          }
          handleColumnChange(newarr);

        },
      };
      var sortable = Sortable.create(componentBackingInstance, options);

      this.setState({
        sortable: sortable
      });

    }
  };


  onMouseOver = (column: any)=> {
    column.move = true;
    this.forceUpdate();
  };


  onMouseOut = (column: any)=> {
    column.move = false;
    this.forceUpdate();
  };


  onChange = (column: any)=> {
    column.show = !column.show;
    this.props.handleColumnChange(this.state.newarr);
  };


  componentDidMount = () => {
    var columns = this.props.columns;

    var select_columns = [];
    for (var index in columns) {
      select_columns.push({
        title: columns[index].title,
        show: true
      });
    }
    this.setState({
      newarr: select_columns,
      select_columns: select_columns
    })
  };


  componentWillReceiveProps = (nextProps: any)=> {
    if (!this.state.sorted) {
      var columns = nextProps.select_columns;
      if (columns) {
        this.setState({
          newarr: columns,
          select_columns: columns
        });
      }
    }
  };


  render() {
    let carr = [];
    for (let index in this.state.select_columns) {
      let column = this.state.select_columns[index];
      carr.push(<div
        style={{"padding": "5px 0"}}
        key={index}
        onMouseOver={()=>this.onMouseOver(column)}
        onMouseOut={()=>this.onMouseOut(column)}
      >
        <label>
          <Checkbox
            checked={column.show}
            onChange={()=>this.onChange(column)}
          />
          {column.title}
        </label>
        {
          column.move ? <div
            style={{width: 16, height: 16}}
            className="anticon_move"
          /> : null
        }
      </div>);
    }
    let content = (
      <div className="chack_list">
        <div ref={this.sortableGroupDecorator}>
          {carr}
        </div>
      </div>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        placement="bottom"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        style={this.props.style}
      >
        <Button
          type="ghost"
          style={{
            width: 100,
            float: 'right',
            marginRight: 10
          }}
        >
          列表选项
        </Button>
      </Popover>
    );
  }
}
