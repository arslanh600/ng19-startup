import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AdminLayoutModule } from "../layouts/admin/admin-layout.module";

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet,AdminLayoutModule],
  templateUrl:'admin.component.html',
  styleUrls:['admin.component.scss']
})
export class AdminComponent {

}