export { default } from "next-auth/middleware";

export const config = {
  path: ["/users/:id*"],
};
