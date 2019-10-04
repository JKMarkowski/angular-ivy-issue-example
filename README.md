# Angular IVY Issue Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## The Issue

Try to change any attribute of `<time-picker>`, which implements ControlValueAccessor, or switch off IVY option in `angularCompilerOptions` in `tsconfig.json`.
Otherwise it throws error `Can't bind to 'ngModel' since it isn't a known property of 'fd-time-picker'`.
