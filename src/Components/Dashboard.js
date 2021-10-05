import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import style from "./dashboard.module.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { styled } from "@mui/material/styles";
import { Badge, Avatar, Stack } from "@mui/material";

const { Header, Sider, Content, Footer } = Layout;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Dashboard(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const logOut = () => {
    window.location.href = "/";
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={style.navbar_header}
      >
        <h4 className="logo">LOGO</h4>
        <Menu theme="dark" mode="inline">
          <Menu.Item key={1} icon={<UserOutlined />}>
            <Link to="/ishchilar">Ishchilar</Link>
          </Menu.Item>
          <Menu.Item key={2} icon={<UserOutlined />}>
            <Link to="/mollar">Mollar</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={<UserOutlined />}>
            <Link to="/yem">Yemlar</Link>
          </Menu.Item>
          <Menu.Item key={4} icon={<UserOutlined />}>
            <Link to="/sut">Sut</Link>
          </Menu.Item>
          <Menu.Item key={5} icon={<UserOutlined />}>
            <Link to="/" onClick={logOut}>
              Sahifadan chiqish
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className={`site-layout-background ${style.header_badge}`}
          style={{ padding: "0 10px" }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <Stack
            direction="row"
            spacing={2}
            style={{
              marginRight: "20px",
            }}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Link to="/axborot" style={{ textDecoration: "none" }}>
                <Avatar alt="Alisher" src="/static/images/avatar/1.jpg" />
              </Link>
            </StyledBadge>
          </Stack>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
