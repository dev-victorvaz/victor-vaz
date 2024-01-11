import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { GetAgeService } from 'src/app/services/get-age.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private meta: Meta,
    private getAgeService: GetAgeService) { }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description', content: `I have ${this.getAgeService.getAge()} years old, {{collegePeriod()}} and
      I'm very happy to be part of technology area.`
    });
    this.meta.addTag({
      name: 'keywords', content: 'Angular, SQL, DevOPS, Java, Developer, Programmer'
    });
    this.meta.addTag({
      name: 'author', content: 'Victor Vaz'
    });
    this.meta.addTag({
      content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg', itemprop: 'image'
    });

    this.meta.addTag({
      property: 'og:title', content: 'Victor Vaz'
    });
    this.meta.addTag({
      property: 'og:description', content: 'I have 23 years old, and I’m so glad for be part of technology area. Always keep myself constantly learning.'
    });
    this.meta.addTag({
      property: 'og:image', content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg'
    });
    this.meta.addTag({
      property: 'og:image:width', content: '512'
    });
    this.meta.addTag({
      property: 'og:image:height', content: '512'
    });
    this.meta.addTag({
      property: 'og:image:type', content: 'image/jpeg'
    });
    this.meta.addTag({
      name: 'twitter:card', content: 'summary_large_image'
    });
    this.meta.addTag({
      name: 'twitter:image', content: 'https://www.victorvaz.com/assets/images/victor-vaz.jpg'
    });
  }
  
}
