import React, { useState } from "react";

import {Anchor, Drawer, Button, Form, Input} from 'antd';

const { Link } = Anchor;

function AppHeader() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
      <div className="container-fluid">
          <div className="header">
              <div className="logo">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  <a href="/">ZIPZAP</a>
              </div>
              <div className="mobileHidden">
                  <Anchor targetOffset="65">

                      <Form
                          name="normal_login"
                          className="login-form"
                          initialValues={{ remember: true }}
                          layout="inline"
                      >
                          <Form.Item
                              name="city"
                              rules={[{ required: true, message: 'Por favor ingresa una ciudad!' }]}
                          >
                              <Input placeholder="Ciudad" />
                          </Form.Item>

                          <Form.Item>
                              <Button type="primary" htmlType="submit" className="login-form-button">
                                  Buscar
                              </Button>
                          </Form.Item>
                      </Form>


                      <Link href="/" title="Home" />
                      <Link href="/login" title="Iniciar Sesión" />
                      <Link href="/signup" title="Registrate" />

                  </Anchor>
              </div>
              <div className="mobileVisible">
                  <Button type="primary" onClick={showDrawer}>
                      <i className="fas fa-bars"></i>
                  </Button>
                  <Drawer
                      placement="right"
                      closable={false}
                      onClose={onClose}
                      visible={visible}
                  >
                      <Anchor targetOffset="65">
                          <Link href="/" title="Home" />
                          <Link href="/login" title="Iniciar Sesión" />
                          <Link href="/signup" title="Registrate" />
                      </Anchor>
                  </Drawer>
              </div>
          </div>
      </div>
    );
}

export default AppHeader;