import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { ClientListService } from './client-list.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    PoPageModule,
    PoTableModule
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  public clientList: Array<any> = new Array();
  public columnsTable: Array<any> = new Array();

  constructor(
    private ClientListService: ClientListService,
    private router: Router,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.updateSupplierList();
    this.columnsTable = this.ClientListService.getColumns();
  }

  private updateSupplierList(): void {
    this.ClientListService.getClientList().subscribe(response => {
      this.clientList = response.items;
    })
  }
}
