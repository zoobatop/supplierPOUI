import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoModule, PoDynamicFormField, PoDynamicModule, PoButtonModule, PoNotificationService, PoNotificationModule } from '@po-ui/ng-components';
import { Supplier } from './models/supplier.model';
import { SupplierFormService } from './supplier-form.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [ PoModule,
    PoDynamicModule,
    PoButtonModule,
    PoNotificationModule
  ],
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.css'
})
export class SupplierFormComponent implements OnInit {
  public supplier: Supplier = new Supplier();
  public supplierValues = {
    type: 2,
    code: "",
    storeId: "",
    shortName: "",
    name: "",
    strategicCustomerType: "J",
    entityType: "J",
    number: "",
    address: "",
    zipCode: "",
    stateId: "",
    stateInternalId: "",
    stateDescription: "",
    complement: "",
    district: "",
    cityCode: "",
    cityDescription: ""
  }; //array com os valores do fomulário
  supplierType: string = '2'; //no nosso exemplo será sempre 2=fornecedor, mas poderia ser 1=cliente
  supplierId: string = '';
  title: string = 'Inclusão de Fornecedor';

  constructor(
    private supplierFormService: SupplierFormService, //servico do form
    private poNotification: PoNotificationService, //usar as notificações do PO.UI
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.supplierValues = {
        type: 2,
        code: "",
        storeId: "",
        shortName: "",
        name: "",
        strategicCustomerType: "J",
        entityType: "J",
        number: "",
        address: "",
        zipCode: "",
        stateId: "",
        stateInternalId: "",
        stateDescription: "",
        complement: "",
        district: "",
        cityCode: "",
        cityDescription: ""
      }
  }

  public insertSupplier(): void {
    this.getSupplierFromForm();
    this.supplierFormService.postNewSupplier(JSON.stringify(this.supplier))
    .pipe(first())
    .subscribe(() => {
      this.poNotification.success('Fornecedor foi inserido com Sucesso');
      this.router.navigate(['/supplier']);
    }, error => {
      let messageError = JSON.parse(error.error.errorMessage);
      this.poNotification.error(`Erro código ${messageError.code}, ${decodeURIComponent(escape(messageError.message))}, detalhe: ${decodeURIComponent(escape(messageError.detailedMessage))}.`)
    })

  }

  private getSupplierFromForm(): void {
    this.supplier.code = this.supplierValues.code;
    this.supplier.storeId = this.supplierValues.storeId;
    this.supplier.name = this.supplierValues.name;
    this.supplier.shortName = this.supplierValues.shortName;
    this.supplier.strategicCustomerType = this.supplierValues.strategicCustomerType;
    this.supplier.entityType = this.supplierValues.entityType;
    this.supplier.type = this.supplierValues.type;
    this.supplier.address.address = this.supplierValues.address;
    this.supplier.address.city.cityCode = this.supplierValues.cityCode;
    this.supplier.address.city.cityDescription = this.supplierValues.cityCode;
    this.supplier.address.city.cityInternalId = this.supplierValues.cityCode;
    this.supplier.address.state.stateId = this.supplierValues.stateId;
    this.supplier.address.state.stateInternalId = this.supplierValues.stateId;
  }

  public fields: Array<PoDynamicFormField> = [
    {
      property: 'code',
      label: 'Código',
      divider: 'Dados Pessoais',
      maxLength: 6
    },
    {
      property: 'storeId',
      label: 'Loja',
      maxLength: 2
    },
    {
      property: 'name',
      label: 'Nome',
      maxLength: 40
    },
    {
      property: 'shortName',
      label: 'Nome Reduzido',
      maxLength: 20
    },
    {
      property: 'strategicCustomerType',
      label: 'Tipo do cliente',
      options: [
        { label: 'Cons. Final', value: 'F' },
        { label: 'Produtor Rural', value: 'L' },
        { label: 'Revendedor', value: 'R' },
        { label: 'Solidario', value: 'S' },
        { label: 'Exportação', value: 'X' }
      ]
    },
    {
      property: 'entityType',
      label: 'Tipo da entidade',
      options: [
        { label: 'Juridica', value: 'J' },
        { label: 'Fisica', value: 'F' }
      ]
    },
    {
      property: 'registerSituation',
      label: 'Situação',
      options: [
        { label: 'Inativo', value: '1' },
        { label: 'Ativo', value: '2' }
      ]
    },
    {
      property: 'type',
      label: 'Tipo',
      options: [
        { label: 'Cliente', value: 1 },
        { label: 'Fornecedor', value: 2 }
      ]
    },
    {
      property: 'zipCode',
      label: 'CEP',
      divider: 'Endereço',
      maxLength: 9
    },
    {
      property: 'address',
      label: 'Endereço'
    },
    {
      property: 'cityCode',
      label: 'Cidade',
      options: [
        { label: 'Adolfo', value: '00204' },
        { label: 'São José do Rio Preto', value: '49805' },
        { label: 'José Bonifácio', value: '25706' },
        { label: 'Joinville', value: '09102' }
      ]
    },
    {
      property: 'stateId',
      label: 'Estado',
      options: [
        { label: 'Santa Catarina', value: 'SC' },
        { label: 'São Paulo', value: 'SP' },
        { label: 'Rio de Janeiro', value: 'RJ' },
        { label: 'Minas Gerais', value: 'MG' }
      ]
    }
  ]
}
