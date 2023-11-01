"use client";
import React from "react";
import { Select } from "@radix-ui/themes";
const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Asignee" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">Bilal</Select.Item>
          <Select.Item value="2">Abbas</Select.Item>
          <Select.Item value="3">Waqas</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
