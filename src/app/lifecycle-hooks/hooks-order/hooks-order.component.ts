import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
// import this for using ngif,ngfor
import { CommonModule } from "@angular/common"; // ✅ Import this

@Component({
  selector: "app-hooks-order",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./hooks-order.component.html",
  styleUrls: ["./hooks-order.component.scss"]
})

export class HooksOrderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  lifeCyclehooksList: any = [];
  activeHook: string | null = null; // store currently selected hook

  ngOnInit() {

    const lifeCycleHooks = [
      { name: 'constructor()', content: 'component is created' },
      { name: 'ngOnChanges()', content: '(if any @Input() changed initially)' },
      { name: 'ngOnInit()', content: 'called once when initialization is done' },
      { name: 'ngDoCheck()', content: 'called during every change detection run' },
      { name: 'ngAfterContentInit()', content: 'called once after content (ng-content) is projected into view' },
      { name: 'ngAfterContentChecked()', content: ' called after every check of projected content' },
      { name: 'ngAfterViewInit()', content: 'called once after the components view (and child views) has been initialized' },
      { name: 'ngAfterViewChecked()', content: 'called after every check of the components view (and child views)' },
      { name: 'ngOnDestroy()', content: 'called once just before the component is destroyed' }
    ]

    // ✅ Get the current route name (last part of the URL)
    const currentUrl = this.router.url; // e.g. /lifecycle-hooks/ngOnInit
    const routeName = currentUrl.split('/').pop(); // e.g. "ngOnInit"

    this.activeHook = routeName ?? null; // store current hook

    this.lifeCyclehooksList = lifeCycleHooks.map((val) => ({
      hookName: val.name,
      content: val.content,
    }));

    console.warn('hooks order component')
    console.log(this.lifeCyclehooksList)
    console.log('Active Hook:', this.activeHook);
  }
}
