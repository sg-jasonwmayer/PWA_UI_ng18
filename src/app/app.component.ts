import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from '@angular/cdk/platform';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SwUpdate, SwPush } from '@angular/service-worker';
import * as LogRocket from 'logrocket';
import { configure } from 'scandit-sdk';
import { filter, map } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { fadeAnimation, fadeIn, fadeOut } from './animations/animations';
import { AppConfigService } from './appconfig/appconfig.service';
//import { UpdateAppComponent } from './update-app/update-app.component';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetProcesses } from './store/claim';
import { ManifestService } from './_services/manifest/manifest.service';
import { remoteServersHostnames } from './_services/remote-server-hostnames';

// Initialize LogRocket with your app ID
LogRocket.init('om4bhr/pwa-etfq2');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeOut, fadeIn, fadeAnimation]
})
export class AppComponent implements OnInit {
  custom_font_normal = this.appConfig.cmsData.custom_font_normal;
  custom_font_bold = this.appConfig.cmsData.custom_font_bold;
  custom_font_light = this.appConfig.cmsData.custom_font_light;
  title = 'Claims Portal';
  root = document.documentElement;
  applicationVersion = environment.appVersion;
  showNav: boolean | undefined;
  isPageLoading!: boolean;
  scandit_Key: string;
  toast: any;
  bottomSheetOpen = true;
  screenOrientation: any;
  fullscreen: any;
  dealerCode!: string;
  isSso = localStorage.getItem('isSso');
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(
    // private appConfig: AppConfigService,
    private swUpdate: SwUpdate,
    // private bottomsheet: MatBottomSheet,
    // private titleService: Title,
    // private router: Router,
    // private activatedRoute: ActivatedRoute,
    // public platform: Platform,
    // private store: Store,
    // private manifestService: ManifestService
  ) {
    
    //this.manifestService.getManifest(window.location.host);
    //this.store.dispatch(resetProcesses());

    if (!this.swUpdate.isEnabled) {
      console.log('Service worker is not enabled');
    } else {
      console.log('Service worker is enabled');
      setInterval(() => {
        this.checkForUpdates();
      }, 5000);
    }

    this.createClass();

    // Redirect to https always
    if (window.location.hostname !== 'localhost') {
      if (window.location.protocol !== 'https:') {
        window.location.replace(
          `https:${location.href.substring(location.protocol.length)}`
        );
      }
    }

    // Dev
    if (this._getDevENV().includes(window.location.hostname)) {
      this.scandit_Key = this.appConfig.cmsData.dev_scandit[0]['text'];
    }

    // QA
    else if (this._getQAENV().includes(window.location.hostname)) {
      this.scandit_Key = this.appConfig.cmsData.qa_scandit[0]['text'];
    }
    // UAT
    else if (this._getUATENV().includes(window.location.hostname)) {
      this.scandit_Key = this.appConfig.cmsData.uat_scandit[0]['text'];
    }
    // UAT-ETA
    else if (this._getUATETAENV().includes(window.location.hostname)) {
      this.scandit_Key = this.appConfig.cmsData.uat_scandit[0]['text'];
    }
    // UAT-OMEGA
    else if (this._getUATOMEGAENV().includes(window.location.hostname)) {
      this.scandit_Key = this.appConfig.cmsData.uat_scandit[0]['text'];
    }
    // PROD
    else if (this._getPRODENV().includes(window.location.hostname)) {
      this.scandit_Key = this.appConfig.cmsData.production_scandit[0]['text'];
    } else if (this._getProtectionENV().includes(window.location.hostname)) {
      this.scandit_Key =
        this.appConfig.cmsData['protection-claims_scandit'][0]['text'];
    }

    // Mobile
    else {
      this.scandit_Key = environment.scanditKeyPWA_mobile;
    }

    configure(this.scandit_Key, {
      engineLocation: 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/',
      preloadEngine: true,
      preloadBlurryRecognition: true
    });
  }

  private _getDevENV(): string[] {
    return this._getDevRemoteServersHostnames(); 
  }
  private _getQAENV() {
    return this._getQARemoteServersHostnames(); 
  }
  private _getUATENV() {
    return this._getUATRemoteServersHostnames(); 
  }
  private _getUATETAENV() {
    return this._getUATETARemoteServersHostnames(); 
  }
  private _getUATOMEGAENV() {
    return this._getUATOMEGARemoteServersHostnames(); 
  }
  private _getPRODENV() {
    return this._getProdRemoteServersHostnames(); 
  }
// production environments
  private _getProtectionENV() {
    return this._getProtectionRemoteServersHostnames(); 
  }

  ngOnInit() {
    this.isPageLoading = false;
    if (this.platform.ANDROID || this.platform.IOS) {
      localStorage.setItem('deviceType', 'Mobile');
    } else {
      localStorage.setItem('deviceType', 'Desktop');
    }
    const appTitle = this.titleService.getTitle();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data.title) {
            return child?.snapshot.data.title;
          }
          return appTitle;
        })
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }
  private _getProtectionRemoteServersHostnames() {
    return remoteServersHostnames.filter(hostname => hostname.includes('protection-claims'));
  }
  private _getProdRemoteServersHostnames() {
    return remoteServersHostnames.filter(hostname => hostname.includes('prod'));
  }
  private _getUATETARemoteServersHostnames() {
    return remoteServersHostnames.filter(hostname => hostname.includes('uat-eta'));
  }
  private _getUATOMEGARemoteServersHostnames() {
    return remoteServersHostnames.filter(hostname => hostname.includes('uat-omega'));
  }
  private _getUATRemoteServersHostnames() {
    return remoteServersHostnames.filter(hostname => hostname.includes('uat'));
  }
  private _getQARemoteServersHostnames() {
    return remoteServersHostnames.filter(hostname => hostname.includes('qa'));
  }
  private _getDevRemoteServersHostnames(): string[] {
    return remoteServersHostnames.filter(hostname => hostname.includes('dev'));
  }



  createClass(): void {
    const secondary_RGB = this.appConfig.cmsData.secondary_color;
    const primary_RGB = this.appConfig.cmsData.primary_color;

    const A = '0.3';
    const secondary_RGBA =
      'rgba(' +
      parseInt(secondary_RGB.substring(1, 3), 16) +
      ',' +
      parseInt(secondary_RGB.substring(3, 5), 16) +
      ',' +
      parseInt(secondary_RGB.substring(5, 7), 16) +
      ',' +
      A +
      ')';
    const primary_RGBA =
      'rgba(' +
      parseInt(primary_RGB.substring(1, 3), 16) +
      ',' +
      parseInt(primary_RGB.substring(3, 5), 16) +
      ',' +
      parseInt(primary_RGB.substring(5, 7), 16) +
      ',' +
      A +
      ')';
    document.getElementById('title').innerHTML =
      this.appConfig.cmsData.brand_name[0].text + ' Claims Portal';
    this.root.style.setProperty(
      '--primary',
      this.appConfig.cmsData.primary_color
    );
    this.root.style.setProperty(
      '--secondary',
      this.appConfig.cmsData.secondary_color
    );
    this.root.style.setProperty(
      '--tertiary',
      this.appConfig.cmsData.tertiary_color
    );
    if (this.appConfig.cmsData.font && this.appConfig.cmsData.font.length) {
      this.root.style.setProperty(
        '--font-family',
        this.appConfig.cmsData.font[0].text
      );
    }
    this.root.style.setProperty('--primary-opaque', primary_RGBA);
    this.root.style.setProperty('--secondary-opaque', secondary_RGBA);
    document
      .getElementById('apple-touch-icon')
      .setAttribute('href', this.appConfig.cmsData.icon_192x192.url);
    document
      .getElementById('favicon')
      .setAttribute('href', this.appConfig.cmsData.favicon.url);
    document
      .getElementById('theme-color')
      .setAttribute('content', this.appConfig.cmsData.secondary_color);
  }

  checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(
        () => {
          this.swUpdate.available.subscribe((evt) => {
            console.log('Update Available');
            window.location.reload();
          });
        },
        (error) => {
          console.log('Error when checking for updates', error.error.message);
        }
      );
    }
  }
}
