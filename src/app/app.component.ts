import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  styles: [`#myButton { font-family: Lato; margin-bottom: 10px; }`]
})
export class AppComponent {
  name = "";
  height = 1.7;
  caption = "Hello!";
  
  DoSomething()
  {
    if (this.caption == "Hello!")
    {
      this.caption = "Goodbye!";      
    }
    else
    {
      this.caption = "Hello!";
    }
  }
}
