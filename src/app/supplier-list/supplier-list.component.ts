import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { SupplierListService } from './supplier-list.service';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [ PoPageModule, PoTableModule ],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent implements OnInit {
  public supplierList: Array<any> = new Array();
  public columnsTable: Array<any> = new Array();

  constructor(
    private SupplierListService: SupplierListService,
    private router: Router,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.updateSupplierList();
    this.columnsTable = this.SupplierListService.getColumns();
  }

  private updateSupplierList(): void {
    this.SupplierListService.getSupplierList().subscribe(response => {
      this.supplierList = response.items;
    })
  }

}
