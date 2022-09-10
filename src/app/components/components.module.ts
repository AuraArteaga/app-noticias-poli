import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent,CharactersComponent, CharacterComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, CharactersComponent, CharacterComponent, FooterComponent]
})
export class ComponentsModule { }