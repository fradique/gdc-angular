import { Coronavirus } from './../model/coronavirus';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnDestroy {
  sub: Subscription;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { yAxes: [{ ticks: { min: 0, stepSize: 1 } }] },
    animation: { duration: 0 }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private db: AngularFirestore) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.db
      .collection<Coronavirus>('coronavirus')
      .valueChanges()
      .subscribe(films => {
        this.barChartLabels = films.map(f => f.pais);
        this.barChartData = [{ data: films.map(f => f.infectados) }];
      });
  }
}
