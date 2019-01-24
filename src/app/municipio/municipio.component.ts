import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from "@angular/forms";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  municipios: Observable<any>;
  selectedValue: number = 0;
  munSelected: any;
  formControlName = "countryControl";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get("assets/data/consulta_anticorrupcion_municipios.json")
      .subscribe(data => {
        this.municipios = data["consulta"];
        this.munSelected = this.municipios[this.selectedValue];
      });
  }

  onChange() {
    this.munSelected = this.municipios[this.selectedValue];
  }

}
