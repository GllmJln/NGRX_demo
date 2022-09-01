# Tour of Heroes

Partial implementation of [NGRX](https://ngrx.io/) to the [Tour of Heroes](https://angular.io/tutorial) tutorial. NGRX is implemented on the `using-ngrx` branch only.

This repo is intended for demonstrative and educational purposes only.

## Arrangement

There are two store features which have been added to go with the existing services.

### Hero

The hero store feature and service intend to demonstrate the "proper" use of NGRX.

- Components interact directly with the store by dispatching actions
- Hero store feature has an effect which makes an http call by calling a service
- Uses selectors to get the information from state
- Uses the [entity package](https://ngrx.io/guide/entity), which allows for easier CRUD operations and reduces boilerplate code.

### Message

The message store feature and service intend to demonstate the "old way" of using NGRX.

- Actions are classes which implement the action interface
- Reducer is a big switch statement
- Does not use selectors

The demonstating the old way of using NGRX aims to provide a better understanding of the underlying logic which has been abstracted behind helper functions/methods in more recent implementations of NGRX.

_The message store feature is abstracted to the message service. Whilst this is not the "old way" of using NGRX, it intends to demonstrate a way of using angular services in conjunction with NGRX_

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
