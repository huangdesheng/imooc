import React from 'react'
import { Card ,Form,Input, Button,Switch,Radio, InputNumber,Select, DatePicker,Upload} from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const FormItme = Form.Item
const RadioGroup = Radio.Group
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol:{offset:4,span:10}
  }
export default class Register extends React.Component{
    componentDidMount() {
        console.log(this.props.form)
    }

   
    state={
        imageUrl:''
    }
    render() {
        const onFinish = (value)=>{
            console.log(value)
        }
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          );
         return(
            <div className="content-wrap">
                <Card title="表单注册" className="content-wrap">
                    <Form layout="horizontal" {...layout} onFinish={onFinish} initialValues={{
                        sex:'1',
                        age:1,
                        state:[],
                        hobby:[]
                    }}>
                      <FormItme label="用户名" name="username" rules={
                          [
                              {
                                  required:true,
                                  message:'please input your userName'
                              }
                          ]
                          }>
                        <Input placeholder="请输入用户名"/>
                      </FormItme>
                      <FormItme label="密码" name="password" rules={
                          [
                              {
                                  required:true,
                                  message:'please input your password'
                              }
                          ]
                          }>
                        <Input type="passWord" placeHolder="请输入密码"/>
                      </FormItme>

                      <FormItme label="性别" name="sex" >
                          <RadioGroup>
                              <Radio value="1">男</Radio>
                              <Radio value="2">女</Radio>
                          </RadioGroup>
                      </FormItme>

                      <FormItme label="年龄" name="age">
                          <InputNumber />
                      </FormItme>

                      <Form.Item name="switch" label="是否已婚" valuePropName="checked">
                        <Switch />
                      </Form.Item>

                      <FormItme label="当前状态" name="state">
                          <Select>
                             <Select.Option value="1">无业游民</Select.Option>
                             <Select.Option value="2">就业中</Select.Option>
                             <Select.Option value="3">已就业</Select.Option>
                             <Select.Option value="4">创业</Select.Option>
                             <Select.Option value="5">老板</Select.Option>
                          </Select>
                      </FormItme>


                      <FormItme label="爱好" name="hobby">
                             <Select  mode="multiple">
                                <Select.Option value="1">阅读</Select.Option>
                                <Select.Option value="2">打代码</Select.Option>
                                <Select.Option value="3">唱歌</Select.Option>
                                <Select.Option value="4">跳舞</Select.Option>
                                <Select.Option value="5">运动</Select.Option>
                             </Select>
                      </FormItme>

                      <FormItme label="出生日期" name="birhtday" rules={[
                          {
                              required:true,
                              message:'please select your birthday'
                          }
                      ]}>
                          <DatePicker />
                      </FormItme>

                      <FormItme label="联系地址" name="address">
                        <Input.TextArea />
                      </FormItme>

                      <FormItme label="上传头像">
                        <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            >
                            {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                      </FormItme>

                      <FormItme {...tailLayout}>
                          <Button type="primary" htmlType="submit">注册</Button>
                      </FormItme>
                    </Form>
                </Card>
            </div>
        )
       
    }
}

// const CustomizedForm = Form.create({})(Register);

// export default Form.create({})(Register)