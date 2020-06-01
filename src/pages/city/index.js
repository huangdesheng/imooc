import React from 'react'
import {Card,Form, Select, Button, Modal} from 'antd'

const FormItem = Form.Item

export default class City extends React.Component{
    state={
        isShowOpenCityStatus:false
    }
    // 开通城市
    handleOpenCity=()=>{
        this.setState({
            isShowOpenCityStatus:true
        })
    }
    render() {
        return (
            <div className="content-wrap">
               <Card className="card-wrap">
                    <HeaderSlectForm />
               </Card>
               
               <Card>
                   <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
               </Card>
               <Modal title="开通城市" visible={this.state.isShowOpenCityStatus} onCancel={()=>{
                   this.setState({
                       isShowOpenCityStatus:false
                   })
               }} onOk={this.handleOpenCityOk}>

               </Modal>
            </div>
        )
    }
}
class HeaderSlectForm extends React.Component{
   render() {
       return (
           <Form layout='inline'>
               <FormItem label="城市" name="city">
                    <Select placeholder="全部" style={{width:'120px'}}>
                        <Select.Option value="">全部</Select.Option>
                        <Select.Option value="1">广州市</Select.Option>
                        <Select.Option value="2">深圳市</Select.Option>
                    </Select>
               </FormItem>
               <FormItem label="用车模式" name="use_mode">
                    <Select placeholder="全部" style={{width:'120px'}}>
                        <Select.Option value="">全部</Select.Option>
                        <Select.Option value="1">禁停区</Select.Option>
                        <Select.Option value="2">停车区</Select.Option>
                    </Select>
               </FormItem>
               <FormItem label="用车模式" name="operation_mode">
                    <Select placeholder="全部" style={{width:'120px'}}>
                        <Select.Option value="">全部</Select.Option>
                        <Select.Option value="1">加盟</Select.Option>
                        <Select.Option value="2">自营</Select.Option>
                    </Select>
               </FormItem>
               <FormItem label="加盟商授权状态" name="Franchisee_authorization_smode">
                    <Select placeholder="全部" style={{width:'150px'}}>
                        <Select.Option value="">全部</Select.Option>
                        <Select.Option value="1">松果自营</Select.Option>
                        <Select.Option value="2">刚果自营</Select.Option>
                    </Select>
               </FormItem>
               <FormItem>
                  <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                  <Button>重置</Button>
               </FormItem>
           </Form>
       )
   }
}