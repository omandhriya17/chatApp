import { createLazyFileRoute } from "@tanstack/react-router";
import Login from "../login/Login";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
