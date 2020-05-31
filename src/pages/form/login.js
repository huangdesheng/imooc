import React from 'react'
import { Card ,Form, Button, Checkbox,Input, message, Modal,Radio} from 'antd'
import { FormInstance } from 'antd/lib/form';
const FormItme = Form.Item
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol:{offset:4,span:10}
  }
 class Login extends React.Component{
    formRef = React.createRef();
   
    onReset=()=>{
        this.formRef.current.resetFields()
    }
    
    render() {
        const onFinish=(value)=>{
            if(value.username == 123456 && value.password == 123456){
                Modal.confirm({
                title:'确认',
                    content:'登录成功'
                })
            }
        }
        const onFinishFailed =(value)=>{
            console.log(false)
            console.log(value)
        }
        return(
            <div className="content-wrap">
                <Card title="表单登录" className="content-wrap">
                    <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed} ref={this.formRef} layout={'horizontal'} >
                        <FormItme label="userName" name="username" rules={
                            [
                                {
                                    required:true,
                                    message:'please input your username'
                                }
                            ]
                        }>
                            <Input />
                        </FormItme>

                        <FormItme label="passWord" name="password"  rules={
                            [
                                {
                                    required:true,
                                    message:'please input your passwords'
                                }
                            ]
                        }>
                            <Input type="passWord"/>
                        </FormItme>
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <FormItme {...tailLayout}>
                            <Button type="primary" htmlType="submit">Login</Button>
                            <Button htmlType="button" onClick={this.onReset}> Reset </Button>
                        </FormItme>
                    </Form>
                </Card>
             </div>
        )
       
    }
}

export default Login