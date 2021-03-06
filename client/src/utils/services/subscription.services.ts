import { httpsCallable } from "@firebase/functions";
import { functions } from "../../firebase";
import { Subscription } from "../types";

export const createSubscription = httpsCallable<Subscription, void>(
  functions,
  "createSubscription"
);

export const deleteSubscription = httpsCallable<string, void>(
  functions,
  "deleteSubscription"
);
