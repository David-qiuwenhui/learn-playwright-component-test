import { test, expect } from "@playwright/experimental-ct-vue";
import Counter from "./Counter.vue";

test("Counter render", async ({ mount }) => {
  const component = await mount(Counter);
  await expect(component).toContainText("Counter");
});

test("increase", async ({ mount }) => {
  const component = await mount(Counter);
  await expect(component.getByTestId("count")).toContainText("0");
  await component.getByRole("button", {name: "increase"}).click()
  await expect(component.getByTestId("count")).toContainText("1")
});

test('decrease',async  ({mount}) => { 
  const component = await mount(<Counter initCount={1}></Counter >);
  await expect(component.getByTestId("count")).toContainText("1");
  await component.getByRole("button", {name: "decrease"}).click()
  await expect(component.getByTestId("count")).toContainText("0")
 })

test('min 0',async  ({mount}) => { 
  const component = await mount(<Counter initCount={6} min={5}></Counter >);
  await expect(component.getByTestId("count")).toContainText("6");
  await component.getByRole("button", {name: "decrease"}).click()
  await expect(component.getByTestId("count")).toContainText("5")
  await component.getByRole("button", {name: "decrease"}).click()
  await expect(component.getByTestId("count")).toContainText("5")
 })

test('max 10',async  ({mount}) => { 
  const component = await mount(<Counter initCount={19} max={20}></Counter >);
  await expect(component.getByTestId("count")).toContainText("19");
  await component.getByRole("button", {name: "increase"}).click()
  await expect(component.getByTestId("count")).toContainText("20")
  await component.getByRole("button", {name: "increase"}).click()
  await expect(component.getByTestId("count")).toContainText("20")
 })