import React from "react";
import { mount } from "enzyme";

import AngleForwards12 from "@hv/uikit-react-icons/dist/DropRightXS";
import HvProvider from "../../Provider";
import Breadcrumb from "..";

const listRoute = [
  {
    label: "label",
    path: "path"
  },
  {
    label: "label",
    path: "path"
  },
  {
    label: "label",
    path: "path"
  },
  {
    label: "label",
    path: "path"
  },
  {
    label: "label",
    path: "path"
  }
];

describe("Breadcrumb withStyles", () => {
  const wrapper = mount(
    <HvProvider>
      <Breadcrumb />
    </HvProvider>
  );

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render correctly", () => {
    expect(wrapper.find(Breadcrumb)).toMatchSnapshot();
  });

  it("should render the Breadcrumb component", () => {
    const CardComponent = wrapper.find(Breadcrumb);
    expect(CardComponent.length).toBe(1);
  });

  it("should create a breadcrumb with 5 pages", () => {
    const separatorList = mount(
      <HvProvider>
        <Breadcrumb listRoute={listRoute} />
      </HvProvider>
    ).find(AngleForwards12);

    expect(separatorList.length).toBe(4);
  });

  it("should create a breadcrumb with submenu", () => {
    const existsDropdownMenu = mount(
      <HvProvider>
        <Breadcrumb listRoute={listRoute} maxVisible={2} />
      </HvProvider>
    ).exists("DropDownMenu");

    expect(existsDropdownMenu).toBe(true);
  });

  it("should present always two paths", () => {
    const separatorList = mount(
      <HvProvider>
        <Breadcrumb listRoute={listRoute} maxVisible={0} />
      </HvProvider>
    ).find(AngleForwards12);

    expect(separatorList.length).toBe(2);
  });

  it("should create a breadcrumb with 4 pages from url", () => {
    const separatorList = mount(
      <HvProvider>
        <Breadcrumb url="http://test/a/b/c/d" />
      </HvProvider>
    ).find(AngleForwards12);

    expect(separatorList.length).toBe(3);
  });
});
