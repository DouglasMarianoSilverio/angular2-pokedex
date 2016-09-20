import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent implements OnInit {

  @Input() pokemon: any;

  hp: any;
  atk: any;
  def: any;
  spa: any;
  spd: any;
  spe: any;
  total: number;

  ngOnInit() {
    if (this.pokemon){
      let infoList = this.pokemon.stats;
      let item: any;
      this.total = 0;
      for (let i=0; i<infoList.length; i++){
        item = infoList[i];

        if (item.stat.name === 'speed'){
          this.spe = item;
        } else if (item.stat.name === 'special-defense'){
          this.spd = item;
        } else if (item.stat.name === 'special-attack'){
          this.spa = item;
        } else if (item.stat.name === 'attack'){
          this.atk = item;
        } else if (item.stat.name === 'hp'){
          this.hp = item;
        } else if (item.stat.name === 'defense'){
          this.def = item;
        }

        this.total += item.base_stat;
      }
    }
  }

}
