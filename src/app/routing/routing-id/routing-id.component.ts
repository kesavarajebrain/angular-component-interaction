import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: "app-routing-id",
  imports: [RouterModule, CommonModule],
  templateUrl: "./routing-id.component.html",
  styleUrls: ["./routing-id.component.scss"]
})

export class RoutingIdComponent implements OnInit {

  snapshotId: string | null = '';
  liveId: string | null = '';
  category: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // ✅ Snapshot (one-time)
    this.snapshotId = this.route.snapshot.paramMap.get('id');
    console.log('snapshot', this.snapshotId);

    //✅ Observable (live changes)
    this.route.paramMap.subscribe(params => {
      this.liveId = params.get('id');
      console.log('paramMap subscribe', this.liveId);
      this.category = params.get('category');
      console.log('paramMap  category', this.category);

    });
  }

  goToId(id: string) {
    this.router.navigate(['/routing', id]);
  }

  goWithMultipleParams(name: string, id: string) {
    this.router.navigate(['/routing', name, id]);

  }
}
