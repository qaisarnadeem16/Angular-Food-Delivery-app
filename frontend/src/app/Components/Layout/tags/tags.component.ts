import { Component } from '@angular/core';
import { tag } from 'src/app/Shared/models/tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: tag[];

  constructor(private foodService: FoodService) {
  foodService.getAllTags().subscribe(serverTags => {
    this.tags = serverTags
  })
  }
}
