// declare module '@visma/auth' {
//   let NameAppService: any;
//   export = NameAppService;
// }

// declare class NameAppService {
//   private _nameApp: BehaviorSubject<string>;

//   constructor();

//   nameApp$(): Observable<string>;

//   changeNameApp(name: string): void;
// }

declare module '@visma/auth' {
  import { BehaviorSubject, Observable } from 'rxjs';

  const _nameApp: BehaviorSubject<string>;

  export const nameApp$: Observable<string>;

  export function changeNameApp(name: string): void;

  // export class NameAppService {
  //   private _nameApp: BehaviorSubject<string>;

  //   constructor();

  //   nameApp$(): Observable<string>;

  //   changeNameApp(name: string): void;
  // }

  // export = NameAppService;
}
