import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private navigationMobile!: HTMLElement;
  private mobileMenuToggler: boolean = false;
  private themeSwitch!: HTMLElement;
  private themeSwitchToggler: boolean = false;
  private navigationBottom!: HTMLElement;
  private navigationMobileBottom!: HTMLElement;
  private navigationToggle!: HTMLElement;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.navigationMobile = this.el.nativeElement.querySelector('#navigationMobileId');
    this.themeSwitch = this.el.nativeElement.querySelector('#themeSwitchId');
    this.navigationBottom = this.el.nativeElement.querySelector('#navigationBottomId');
    this.navigationMobileBottom = this.el.nativeElement.querySelector('#navigationMobileBottomId');
    this.navigationToggle = this.el.nativeElement.querySelector('#navigationToggleId');
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  toggleLightMode(): void {
    this.themeService.toggleLightMode();
  }

  toggleSystemMode(): void {
    this.themeService.toggleSystemMode();
  }

  toggleMobileMenu(): void {
    if (this.mobileMenuToggler) {
      this.hideNavigationMobile();
      this.renderer.removeClass(this.navigationToggle, 'navigation-toggle-active');

      if (this.themeSwitchToggler) {
        this.hideThemeSwitch();
        this.renderer.removeClass(this.navigationBottom, 'active-link');
        this.renderer.removeClass(this.navigationMobileBottom, 'active-link');
        this.themeSwitchToggler = !this.themeSwitchToggler;
      }
    }
    else {
      this.showNavigationMobile();
      this.renderer.addClass(this.navigationToggle, 'navigation-toggle-active');
    }
    this.mobileMenuToggler = !this.mobileMenuToggler;
  }

  showNavigationMobile() {
    this.renderer.removeClass(this.navigationMobile, 'mobile-hidden');
  }

  hideNavigationMobile() {
    this.renderer.addClass(this.navigationMobile, 'mobile-hidden');
  }

  toggleThemeSwitch(): void {
    if (this.themeSwitchToggler) {
      this.hideThemeSwitch();
      this.renderer.removeClass(this.navigationBottom, 'active-link');
      this.renderer.removeClass(this.navigationMobileBottom, 'active-link');
    } else {
      this.showThemeSwitch();
      this.renderer.addClass(this.navigationBottom, 'active-link');
      this.renderer.addClass(this.navigationMobileBottom, 'active-link');
    }
    this.themeSwitchToggler = !this.themeSwitchToggler;
  }

  showThemeSwitch() {
    this.renderer.setStyle(this.themeSwitch, 'opacity', '1');
    this.renderer.setStyle(this.themeSwitch, 'pointer-events', 'all');
  }

  hideThemeSwitch() {
    this.renderer.setStyle(this.themeSwitch, 'opacity', '0');
    this.renderer.setStyle(this.themeSwitch, 'pointer-events', 'none');
  }

}
