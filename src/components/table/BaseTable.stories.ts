import type { Meta, StoryObj } from "@storybook/vue3";

import BaseTable from "./BaseTable.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";
import { PrimaryButton } from "../button/BaseButton.stories";

const meta: Meta<typeof BaseTable> = {
  component: BaseTable,
  argTypes: {},
};

type Story = StoryObj<typeof BaseTable>;
export default meta;
export const DefaultBaseTable: Story = {
  render: (args) => ({
    components: { BaseTable },
    setup() {
      return { args };
    },

    template: `<BaseTable v-bind="args" >
        <template #caption>Cars length</template>
        <template #header-rows> <tr>
          <th scope="column">Brand</th>
          <th scope="column">Model</th>
          <th scope="column">Length</th>
          <th scope="column">Cost</th>
        </tr></template>
    <template #body-rows>
      <tr>
        <th scope="row">Mercedes</th>
        <td>550</td>
        <td>2.5m</td>
        <td>$250000</td>
      </tr>
      <tr>
        <th scope="row">BMW</th>
        <td>x3</td>
        <td>2m</td>
        <td>$125520</td>
      </tr>
      <tr>
        <th scope="row">Millenium Falcon</th>
        <td>-</td>
        <td>16m</td>
        <td>$52412402404</td>
      </tr>
    </template>
    <template #footer-rows>
      <tr>
        <th scope="row">Best</th>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </template>
    </BaseTable>`,
  }),
  args: {
    variant: "square",
    theme: ThemeType.LIGHT,
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};
export const DefaultBaseTableDarkTheme = {
  ...DefaultBaseTable,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
