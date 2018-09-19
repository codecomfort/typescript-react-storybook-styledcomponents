import { configure } from "@storybook/react";

const req = require.context("../src/Components", true, /.stories.(ts|tsx)$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
