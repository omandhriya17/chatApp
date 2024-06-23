import { ref, set } from "firebase/database";
import { db } from "./config";

export function registerUser(userId, name) {
  set(ref(db, "users/" + userId), name);
}
