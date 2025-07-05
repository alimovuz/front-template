import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {login} = useAuth();

    const onFinish = async (values: any) => {
        const { username, password } = values;
        try {
            const response = await login(username, password);
            console.log(response)
            if (response) navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="w-[400px] items-center p-5 shadow-lg rounded-lg mx-auto">
            {/* <img src={""} alt="Logo" className="w-[200px] h-[200px] mx-auto" /> */}
            <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
              <Form.Item name="username" label="Username" rules={[{ required: true }]}><Input allowClear/></Form.Item>
              <Form.Item name="password" label="Password" rules={[{ required: true }]}><Input.Password allowClear/></Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary" className="w-full text-white">Sign in</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
}

export default SignIn