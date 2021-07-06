import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeProj';
  loadedFeature:string = "recipe";
  onFeatureSelected(feature:string){
    //console.log("app",feature)
    this.loadedFeature = feature;
  }

}
