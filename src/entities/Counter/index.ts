import { counterReducer } from "./model/slice/CounterSlice";
import { counterActions } from "./model/slice/CounterSlice";
import Counter from "./ui/Counter";
import type { CounterSchema } from "./model/types/counterSchema";

export { counterReducer, counterActions, Counter, CounterSchema };
