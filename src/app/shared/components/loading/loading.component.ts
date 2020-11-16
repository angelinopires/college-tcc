import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { LoadingService } from '@services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  private _loadingSubscription: Subscription;

  isLoading = true;
  @Input() isVisible = false;
  @Input() isContainer = false;

  constructor(private loadingService: LoadingService) {}

  public ngOnInit(): void {
    this._loadingSubscription = this.loadingService.isLoading.subscribe(
      (loadingState) => this.isLoading = loadingState
    );
  }

  public ngOnDestroy(): void {
    this._loadingSubscription && this._loadingSubscription.unsubscribe()
  }
}
