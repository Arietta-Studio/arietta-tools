---
title: useOnStandalonePluginInit
description: Used to listen for the initialization of standalone plugins.
nav: API
order: 10
apiHeader:
  pkg: '@arietta-studio/chat-plugin-sdk/client'
group: Hooks
---

Used to listen for the initialization of standalone plugins.

## Syntax

```ts
useOnStandalonePluginInit<T>(callback: (payload: PluginPayload<T>) => void): void;
```

## Parameters

| Parameter  | Type                                  | Description                                                                                                                                                                                  |
| ---------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | `(payload: PluginPayload<T>) => void` | Callback function that will be called when the plugin initialization event is triggered, and the payload of the initialization event will be passed as a parameter to the callback function. |

## Example

```tsx | pure
import { useOnStandalonePluginInit } from '@arietta-studio/chat-plugin-sdk/client';

const Demo = () => {
  useOnStandalonePluginInit((payload) => {
    console.log('payload:', payload);
  });

  return <div>Demo</div>;
};

export default Demo;
```

## Notes

- Please make sure to `useOnStandalonePluginInit` within a React functional component.
- `useOnStandalonePluginInit` will only be executed once when the component is mounted.
- In the callback function, you can process the payload of the initialization event, such as obtaining initialization parameters, calling initialization functions, etc.

## Callback function parameter type definition

```ts
interface PluginPayload<T = any> {
  args?: T;
  func: string;
}
```

| Properties  | Type     | Description                                      |
| ----------- | -------- | ------------------------------------------------ |
| `arguments` | `T`      | Parameters of the plugin initialization event    |
| `name`      | `string` | Function name of the plugin initialization event |
