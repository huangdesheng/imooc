import React from 'react'
import {Table, Card,message,Button, Modal,Badge} from 'antd'
import Mocks from './../../mock/index.js'
import Utils from '../../utils/utils.js'
import axios from 'axios'
// var Mock = require('mockjs')
export default class BasicTable extends React.Component{
    state = {
        selectedRowKeys :[],
        pagination:{},
        page:0
    }
    componentDidMount() {
        let dataSource = Mocks.personInfo().data.list
        this.setState({
            dataSource,
            pagination:Utils.pagination(Mocks.personInfo(),(current)=>{
             console.log(current)
            })
        })
    }

    handleDelete=(item)=>{
        Modal.confirm({
            title:'确认',
            content:'确认删除该数据吗？',
            onOk:()=> {
                message.info('删除成功')
            }
        })
    }

    handleChanges=(pagination, filters, sorter)=>{
        console.log(sorter)
    }

    onSelectChange=(selectedRowKeys,items )=>{
        console.log(selectedRowKeys)
        this.setState({
            selectedRowKeys
        })
        console.log(items)
    }
   
    render() {
        // const rowSelection = {
        //     onChange: (selectedRowKeys, selectedRows) => {
        //       message.info(`selectedRowKeys: ${selectedRowKeys}`);
        //     }
        //   };
        const {selectedRowKeys } = this.state
        const rowSelection ={
            type:'radio',
            selectedRowKeys,
            onChange:this.onSelectChange
        }
        const columns = [
            {
                title:'id',
                dataIndex:'id',
                key:'id',
                fixed:true,
                width:80,
            },
            {
                title:'姓名',
                dataIndex:'name',
                fixed:true,
                key:'name',
                width:80,
            },
            {
                title:'性格',
                dataIndex:'sex',
            
                width:80,
                key:'sex',
                render:sex=>{
                    return parseInt(sex)?'男':'女'
                }
            },

            {
                title:'状态',
                dataIndex:'state',
                width:80,
                key:'state',
                render:(index)=>{
                    const dataState = [
                        '无业游民',
                        '在家待业',
                        '打工',
                        '创业者',
                        '老板',
                    ]
                    return dataState[index-1]
                }
            },
            {
                title:'爱好',
                dataIndex:'insterest',
                width:80,
                key:'insterest',
                sorter: {
                    compare: (a, b) => a.insterest - b.insterest,
                    multiple: 2,
                },
                // render:(index)=>{
                //     const insterest = [
                //         <Badge status="success" text="打篮球" />,
                //         <Badge status="default" text="打桌球" />,
                //         <Badge status="error" text="打代码" />,
                //         <Badge status="processing" text="爬山" />,
                //         <Badge status="default" text="听音乐" />
                      
                //     ]
                //     return insterest[index]
                // }
            },
            // {
            //     title:'生日',
            //     width:80,
            //     dataIndex:'birthDay',
            //     key:'birthDay'
            // },
            // {
            //     title:'地址',
            //     dataIndex:'address',
            //     width:120,
            //     key:'address'
            // },
            {
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },
            {
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
              
                width:80,
            },{
                title:'开始时间',
                dataIndex:'start',
                key:'start',
               
                width:80,
            }, 
            {
                title:'生日',
                width:80,
                
                dataIndex:'birthDay',
                key:'birthDay'
            },
            {
                title:'地址',
                dataIndex:'address',
                width:120,
                key:'address',
                
            },
            {
                title:'操作',
                fixed:'right',
                width:80,
                render:(text,item)=>{
                    return <Button onClick={(item)=>{this.handleDelete(item)}} type="primary">删除</Button>
                }
            }
            
        ]
        return(
            <div className="content-wrap">
               <Card title="Table表格">
                   {/* 单选 */}
                    {/* <Table columns={columns} dataSource={this.state.dataSource} bordered rowSelection = {{
                        type: 'radio',
                        ...rowSelection,
                    }}>
                    </Table> */}

                    {/* 多选 */}
                    <Table bordered columns={columns} dataSource={this.state.dataSource} rowSelection = {rowSelection} pagination={this.state.pagination} scroll={{x:1810}} onChange={this.handleChanges}>

                    </Table>
               </Card>
            </div>
        )
    }
}