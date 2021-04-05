import React from 'react';
import { Row, Col, Input, Select, Radio } from 'antd';
import 'antd/dist/antd.css';

import './App.css';

const App = () => (
  <div>
    <div className="container">
      <h3 className="title">Personal Information:</h3>
      <Row gutter={[26, 8]}>
        {/* Borrower Name */}
        <Col span={12}>
          <Row justify="space-between" align="middle">
            <Col span={10}>
              Borrower Name
            </Col>
            <Col span={14}>
              <Row gutter={[36, 8]}>
                <Col span={12}>
                  <Input placeholder="First Name" />
                </Col>
                <Col span={12}>
                  <Input placeholder="Last Name" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        {/* Email */}
        <Col span={12}>
          <Row justify="space-between" align="middle">
            <Col span={10}>
              Email
            </Col>
            <Col span={14}>
              <Input type="email" placeholder="email@email.com*" />
            </Col>
          </Row>
        </Col>

        {/* Cell Phone */}
        <Col span={12}>
          <Row justify="space-between" align="middle">
            <Col span={10}>
              Cell Phone
            </Col>
            <Col span={14}>
              <Input placeholder="123-456-7890*" />
            </Col>
          </Row>
        </Col>

        <Col span={12}></Col>

        {/* Credit Score */}
        <Col span={12}>
          <Row justify="space-between" align="middle">
            <Col span={10}>
              Cell Phone
            </Col>
            <Col span={14}>
              <Select defaultValue="--Select--" style={{ width: "100%" }}>
                <Select.Option value="Select 1">Select 1</Select.Option>
                <Select.Option value="Select 2">Select 2</Select.Option>
              </Select>
            </Col>
          </Row>
        </Col>

        {/* Number of Properties */}
        <Col span={12}>
          <Row justify="space-between" align="middle">
            <Col span={10}>
              Number of Properties
            </Col>
            <Col span={14}>
              <Input />
            </Col>
          </Row>
        </Col>

        {/* Self Employ? */}
        <Col span={12}>
          <Row justify="space-between" align="middle">
            <Col span={10}>
              Self Employ?
            </Col>
            <Col span={14}>
              <Radio.Group>
                <Radio value={1}>Yes</Radio>
                <Radio value={2}>No</Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>

        {/* Referred by */}
        <Col span={12}>
          <Row justify="space-between" align="middle">
            <Col span={10}>
              Referred by
            </Col>
            <Col span={14}>
              <Input />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="flex-container">
        <p className="plus-icon">+</p>
        <p className="plus-text">
          Co-Borrower<br />
          Name
        </p>
      </div>

      {/* Subject Address */}
      <Row gutter={[36, 8]}>
        <Col span={5}>
          Subject Address
        </Col>
        <Col span={7}>
          <Input placeholder="Street*" />
        </Col>
        <Col span={4}>
          <Input placeholder="City*" />
        </Col>
        <Col span={4}>
          <Input placeholder="State*" />
        </Col>
        <Col span={4}>
          <Input placeholder="Zip*" />
        </Col>
      </Row>

      <p className="italic-text">
        * if you don't know, please put the current address.
      </p>

      {/* Current Address */}
      <Row gutter={[36, 8]}>
        <Col span={5}>
          Current Address
        </Col>
        <Col span={7}>
          <Input placeholder="Street" />
        </Col>
        <Col span={4}>
          <Input placeholder="City" />
        </Col>
        <Col span={4}>
          <Input placeholder="State" />
        </Col>
        <Col span={4}>
          <Input placeholder="Zip" />
        </Col>
      </Row>

    </div>
  </div>
);

export default App;