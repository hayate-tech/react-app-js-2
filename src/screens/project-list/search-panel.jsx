// import { useState, useEffect } from "react"
import _ from "lodash";
import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

// const SearchSelect = React.memo(() => {
//   const param = { manager_id: "" };
//   const setParam = _.noop;
//   const managers = [];

//   return (
//     <>
//       <div>Hello Select</div>
//       <Select
//         defaultValue={param.manager_id}
//         onChange={(value) => {
//           setParam({
//             ...param,
//             manager_id: value,
//           });
//         }}
//       >
//         <Option value="">Manager</Option>
//         {managers.map((manager) => (
//           <Option value={manager.id} key={manager.id}>
//             {manager.name}
//           </Option>
//         ))}
//       </Select>
//     </>
//   );
// });

export const SearchPanel = ({
  projectName,
  setProjectName,
  managerId,
  setManagerId,
  managers,
}) => (
  <form>
    <Input
      type="text"
      value={projectName}
      onChange={(evt) => {
        setProjectName(evt.target.value);
      }}
    />
    <Select
      defaultValue={managerId}
      onChange={(value) => {
        setManagerId(value);
      }}
    >
      <Option value="">Manager</Option>
      {managers.map((manager) => (
        <Option value={manager.id} key={manager.id}>
          {manager.name}
        </Option>
      ))}
    </Select>
  </form>
);
