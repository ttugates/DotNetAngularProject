import { ElementRef, Injectable, Renderer2, signal, ViewChild } from '@angular/core';

export type ColorScheme = 'unset' | 'light' | 'dark';
const COLOR_SCHEME_KEY = "AC_COLOR_SCHEME";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  public colorSchemeSignal = signal(this.getColorScheme());

  private _renderer?: Renderer2 | null;
  private get renderer() : Renderer2
  {
    if(this._renderer == null)
      throw new Error("Renderer2 is null.  Ensure " 
        + "ThemeService.Init is called first.");
    return this._renderer!;
  }

  public Init(renderer: Renderer2)
  {
    this._renderer = renderer;
    
    const dSet = this.getColorSchemeFromDevice();
    const sSet = this.getColorSchemeFromStorage();
    
    // Apply storage override
    if(sSet != 'unset' && dSet !== sSet)
      sSet === 'dark'
        ? this.setToDarkMode()
        : this.setToLightMode();    
  }

  public setToLightMode() {
    this.renderer.setStyle(document.documentElement, 'color-scheme', 'light');
    localStorage.setItem(COLOR_SCHEME_KEY, 'light');
    this.colorSchemeSignal.set('light');
  }

  public setToDarkMode() {
    this.renderer.setStyle(document.documentElement, 'color-scheme', 'dark');
    localStorage.setItem(COLOR_SCHEME_KEY, 'dark');
    this.colorSchemeSignal.set('dark');
  }
  
  private getColorScheme() {
    const sPref = this.getColorSchemeFromStorage();
    if(sPref != 'unset') 
      return sPref;
    return this.getColorSchemeFromDevice();
  }
  
  private getColorSchemeFromDevice(): ColorScheme {
    return window.matchMedia 
      && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private getColorSchemeFromStorage(): ColorScheme {   
    const val = localStorage.getItem('AC_COLOR_SCHEME');
    switch(val)
    {
      case 'dark':
        return 'dark';
      case 'light':
        return 'light';
      default:
        return 'unset';
    }
  }
}
