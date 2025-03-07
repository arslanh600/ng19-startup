import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations:[HeaderComponent,FooterComponent],
    imports: [CommonModule],
    exports:[HeaderComponent,FooterComponent]
  })
  export class PublicLayoutModule { }