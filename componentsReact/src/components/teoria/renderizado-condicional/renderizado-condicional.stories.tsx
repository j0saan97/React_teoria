import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "./renderizado-condicional";

const meta = {
  title: "Ejemplos/RenderizadoCondicional",
  component: Panel,
  argTypes: {
    isLoggedIn: { control: "boolean" },
    notificaciones: { control: { type: "number", min: 0, max: 99 } },
    estado: { control: "inline-radio", options: ["cargando", "error", "ok"] },
    nombre: { control: "text" },
  },
  args: {
    isLoggedIn: true,
    notificaciones: 3,
    estado: "ok",
    nombre: "Josan",
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SinLogin: Story = {
  args: { isLoggedIn: false },
};

export const SinNotificaciones: Story = {
  args: { notificaciones: 0 },
};

export const Cargando: Story = {
  args: { estado: "cargando" },
};

export const ConError: Story = {
  args: { estado: "error", notificaciones: 12 },
};
