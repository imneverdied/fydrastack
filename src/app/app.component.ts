import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  BuyFee = 0.001425;
  Discount = 0.28;
  tax = 0.003;
  Stack = 1;
  BPrice = 0;
  SPrice = 0;
  Amount = 0;
  BuyFeeCount = 0;
}
