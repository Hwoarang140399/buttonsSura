import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-primary-buttons",
  templateUrl: "./primary-buttons.component.html",
  styleUrls: ["./primary-buttons.component.css"]
})
export class PrimaryButtonsComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  public onClick(severity: string = "success") {
    this.messageService.add({
      severity: severity,
      summary: severity,
      detail: "Creado Por Gabriel"
    });
  }

  ngOnInit() {}
}
