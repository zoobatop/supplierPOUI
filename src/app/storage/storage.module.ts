import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoStorageModule } from '@po-ui/ng-storage';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoStorageModule.forRoot({
      name: 'myStorage',
      storeName: '_store',
      driverOrder: ['lokijs', 'websql', 'indexeddb', 'localstorage']
    }),
  ],
})

export class StorageModule { }
