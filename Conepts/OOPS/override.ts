export class BaseComponent { 
    loadData(): void {
        console.log('Load Base API data');
    }
}

export class DashboardComponent extends BaseComponent {
    override loadData(): void {
        console.log('DashboardComponent data');
    }
}

const dashboard = new DashboardComponent();
dashboard.loadData();