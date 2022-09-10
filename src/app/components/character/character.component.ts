import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { CharacterService } from 'src/app/services/character.service';
import { Characters } from 'src/app/types/characters.types';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  noticias:any= {}
  pagination:number = 2;
  constructor(private characterService:CharacterService) { }

  ngOnInit() {
    this.getNoticiasComponent()
  }

  getNoticiasComponent(){
    this.characterService.getNoticias().subscribe((data:any)=>{
       console.log("Esta es la data de la API", data)
       this.noticias = data.articles;
    })
  }

}
