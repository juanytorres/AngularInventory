import { Component } from '@angular/core';
import { InventoryitemsService } from './services/inventoryitems.service';
import {inventoryitems} from './models/inventoryItems';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory';

   objPosts: inventoryitems;
   objPuts: inventoryitems;
   objPatch:inventoryitems;
   objDelete:inventoryitems;
   lstInventory:inventoryitems;

  constructor(private inventoryitemsService:InventoryitemsService)
  {
      
    //Get
      this.inventoryitemsService.getInventoryItems().subscribe(resp=>console.log(resp))

      var oInventory:inventoryitems;              
                           
  } 


  //ADD
   addInventoryItem(){
    var oInventory:inventoryitems;              

      oInventory = new inventoryitems();      
      oInventory.Name = "Add Name";
      oInventory.Amount = 25;
      oInventory.InventoryCode = "Add Inv Code";
      this.inventoryitemsService.post(oInventory).
        subscribe
        (
          data => this.objPosts=data
        )       
   }

   //PUT
   putInventaryItem(){
      //PUT
      var oInventory:inventoryitems; 
      oInventory = new inventoryitems();      
      oInventory.Name = "update Name";
      oInventory.Amount = 25;
      oInventory.InventoryCode = "update inv code";

      this.inventoryitemsService.put(oInventory).
        subscribe
        (
          data => this.objPuts=data
        )
   }

   //DELETE
   deleteInventoryItem()
   {
        var oInventory:inventoryitems; 
       //Delete
       oInventory = new inventoryitems();
       this.inventoryitemsService.delete().
       subscribe
        (
          data => this.objDelete=data
        )
   }




   
  
}
