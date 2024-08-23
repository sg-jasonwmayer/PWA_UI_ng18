import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManifestService {
  private urlMappings: { pattern: string, handler: () => void }[] = [
    { pattern: 'pwa', handler: this.setSG },
    { pattern: 'acura', handler: this.setACURA },
    { pattern: 'audi', handler: this.setAUDI },
    { pattern: 'atntn', handler: this.setAN },
    { pattern: 'nissan', handler: this.setNISSAN },
    { pattern: 'https://an', handler: this.setAN },
    { pattern: 'bentley', handler: this.setBEN },
    { pattern: 'bmw', handler: this.setBMW },
    { pattern: 'elite', handler: this.setELITE},
    { pattern: 'firstclassprotection', handler: this.setMB },
    { pattern: 'ford', handler: this.setFORD},
    { pattern: 'fordlincolnprotect', handler: this.setFORD},
    { pattern: 'gm', handler: this.setGM },
    { pattern: 'honda', handler: this.setHONDA },
    { pattern: 'lamborghini', handler: this.setLAMB },
    { pattern: 'firstclassprotection', handler: this.setMB },
    { pattern: 'tfs', handler: this.setTFS },
    { pattern: 'mini', handler: this.setMINI },
    { pattern: 'plus', handler: this.setPLUS },
    { pattern: 'schomp', handler: this.setSG },
    { pattern: 'sg', handler: this.setSG },
    { pattern: 'pwa', handler: this.setSG },
    { pattern: 'porsche', handler: this.setPOR },
    { pattern: 'volkswagen', handler: this.setVW },
    { pattern: 'vw', handler: this.setVW },
    

    // Add more patterns and handlers as needed
  ];

  constructor() { }

  public async getManifest(url: string): Promise<void> {
    console.log(url);
  
    for (const { pattern, handler } of this.urlMappings) {

      if (url.includes(pattern)) {
        handler.call(this); // Execute the handler function
        return;
      }
    }
    console.warn('No handler found for URL:', url); 
    this.setLocal();
  }

    
  public checkURL(): void {
    const currentURL = window.location.hostname; // or any other URL fetching method
    this.getManifest(currentURL);
  }


  setVW(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_VW.webmanifest');
  }
  setSG(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_SG.webmanifest');
  }
  setTFS(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_TFS.webmanifest');
  }
  setAN(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_AN.webmanifest');
  }
  setGM(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_GM.webmanifest');
  }
  setPOR(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_POR.webmanifest');
  }
  setBEN(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_BEN.webmanifest');
  }
  setLAMB(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_LAMB.webmanifest');
  }
  setBMW(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_BMW.webmanifest');
  }
  setAUDI(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_AUDI.webmanifest');
  }
  setHONDA(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_HONDA.webmanifest');
  }
  setNISSAN(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_NISSAN.webmanifest');
  }
  setELITE(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_ELITE.webmanifest');
  }
  setMINI(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_MINI.webmanifest');
  }
  setACURA(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_ACURA.webmanifest');
  }
  setFORD(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_FORD.webmanifest');
  }
  //MBTODO:set webmanfist file
  setMB(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_MB.webmanifest');
  }
  setPLUS(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_PLUS.webmanifest');
  }
  setLocal(): void {
    document
      .querySelector('#manifest')
      .setAttribute('href', 'manifest_files/manifest_LOCAL.webmanifest');
  }
}