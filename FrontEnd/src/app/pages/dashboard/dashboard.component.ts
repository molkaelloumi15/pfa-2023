import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {AvoirEmpService} from '../../Services/avoir-emp.service';
import {EmployeService} from '../../Services/employe.service';
import {DepartementService} from '../../Services/departement.service';
import {ProjetRechercheService} from '../../Services/projet-recherche.service';
import {Departement} from '../../Model/Departement';
import {HttpErrorResponse} from '@angular/common/http';
import {ProjetRecherche} from '../../Model/ProjetRecherche';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public canvas: any;
    public ctx;
    public datasets: any;
    public data: any;
    public myChartData;
    public clicked = true;
    public clicked1 = false;
    public depNames: string[] = [];
    public depENames: string[] = [];
    public depENb: number[] = [];
    public depBudget: number[] = [];
    public proNames: string[] = [];
    public etudes: string[] = [];
    public proBudget: number[] = [];
    public nbEmpEtud: number[] = [];
    public proENames: string[] = [];
    public proENb: number[] = [];
    constructor(
        private AEE: AvoirEmpService,
        private employeService: EmployeService,
        private departementService: DepartementService,
        private projetService: ProjetRechercheService
    ) {
    }

    ngOnInit() {
        const gradientChartOptionsConfigurationWithTooltipBlue: any = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: '#2380f7'
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#2380f7'
                    }
                }]
            }
        };

        const gradientChartOptionsConfigurationWithTooltipPurple: any = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: '#9a9a9a'
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(225,78,202,0.1)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#9a9a9a'
                    }
                }]
            }
        };

        const gradientChartOptionsConfigurationWithTooltipRed: any = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: '#9a9a9a'
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(233,32,16,0.1)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#9a9a9a'
                    }
                }]
            }
        };

        const gradientChartOptionsConfigurationWithTooltipOrange: any = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 110,
                        padding: 20,
                        fontColor: '#ff8a76'
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(220,53,69,0.1)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#ff8a76'
                    }
                }]
            }
        };

        const gradientChartOptionsConfigurationWithTooltipGreen: any = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(0,242,195,0.1)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }]
            }
        };

        const gradientBarChartConfiguration: any = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            responsive: true,
            scales: {
                yAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 120,
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }],

                xAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        padding: 20,
                        fontColor: '#9e9e9e'
                    }
                }]
            }
        };

        this.departementService.getDepartements().subscribe(
            (result: Departement[]) => {
                for (const dep of result) {
                    this.depNames.push(dep.intituleDep);
                    this.depBudget.push(dep.budgetDep);
                }
                // tslint:disable-next-line:no-shadowed-variable
                let gradientStroke;
                this.canvas = document.getElementById('CountryChart');
                this.ctx = this.canvas.getContext('2d');
                gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
                gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
                gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); // blue colors
                // tslint:disable-next-line:no-unused-expression
                new Chart(this.ctx, {
                    type: 'bar',
                    responsive: true,
                    legend: {
                        display: false
                    },
                    data: {
                        labels: this.depNames,
                        datasets: [{
                            label: 'Budget département',
                            fill: true,
                            backgroundColor: gradientStroke,
                            hoverBackgroundColor: gradientStroke,
                            borderColor: '#1f8ef1',
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            data: this.depBudget,
                        }]
                    },
                    options: gradientBarChartConfiguration
                });
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
        this.projetService.getProjetRecherches().subscribe(
            (result: ProjetRecherche[]) => {
                for (const pro of result) {
                    this.proNames.push(pro.intituleProjetRecherche);
                    this.proBudget.push(pro.budgetProjetRecherche);
                }
                // tslint:disable-next-line:no-shadowed-variable
                let gradientStroke;
                this.canvas = document.getElementById('chartLineGreen');
                this.ctx = this.canvas.getContext('2d');


                gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
                gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); // green colors
                gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); // green colors

                const data = {
                    labels: this.proNames,
                    datasets: [{
                        label: 'Budget Projet de Recherche',
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: '#00d6b4',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: '#00d6b4',
                        pointBorderColor: 'rgba(255,255,255,0)',
                        pointHoverBackgroundColor: '#00d6b4',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: this.proBudget,
                    }]
                };
                const myChart = new Chart(this.ctx, {
                    type: 'bar',
                    responsive: true,
                    legend: {
                        display: false
                    },
                    data,
                    options: gradientBarChartConfiguration

                });
            }
        );
        this.AEE.getAllAvoirEmpByEtuds().subscribe(
            (result: object[]) => {
                for (const ob of result) {
                    this.etudes.push(ob[1]);
                    this.nbEmpEtud.push(ob[0]);
                }

                this.canvas = document.getElementById('chartLineRed');
                this.ctx = this.canvas.getContext('2d');

                let gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
                gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
                gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); // red colors

                const data = {
                    labels: this.etudes,
                    datasets: [{
                        label: 'Nombre Employé par Etude',
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: '#ec250d',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: '#ec250d',
                        pointBorderColor: 'rgba(255,255,255,0)',
                        pointHoverBackgroundColor: '#ec250d',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: this.nbEmpEtud,
                    }]
                };

                const myChart = new Chart(this.ctx, {
                    type: 'line',
                    data,
                    options: gradientChartOptionsConfigurationWithTooltipRed
                });


                this.employeService.countEmployeByDep().subscribe(
                    (resulte: object[]) => {
                        for (const ob of resulte){
                            this.depENames.push(ob[1]);
                            this.depENb.push(ob[0]);
                        }
                        this.employeService.countEmployeByProjetRecherche().subscribe(
                            (resul:object[]) =>{
                                for (const ob of resul){
                                    this.proENames.push(ob[1]);
                                    this.proENb.push(ob[0]);
                                }
                                // tslint:disable-next-line:variable-name
                                const chart_labels = this.depENames;
                                this.datasets = [
                                    this.depENb,this.proENb
                                ];
                                this.data = this.datasets[0];
                                this.canvas = document.getElementById('chartBig1');
                                this.ctx = this.canvas.getContext('2d');
                                gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

                                gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
                                gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
                                gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); // red colors
                                const config = {
                                    type: 'line',
                                    data: {
                                        labels: chart_labels,
                                        datasets: [{
                                            label: 'Nombre Etudiant',
                                            fill: true,
                                            backgroundColor: gradientStroke,
                                            borderColor: '#ec250d',
                                            borderWidth: 2,
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            pointBackgroundColor: '#ec250d',
                                            pointBorderColor: 'rgba(255,255,255,0)',
                                            pointHoverBackgroundColor: '#ec250d',
                                            pointBorderWidth: 20,
                                            pointHoverRadius: 4,
                                            pointHoverBorderWidth: 15,
                                            pointRadius: 4,
                                            data: this.data,
                                        }]
                                    },
                                    options: gradientChartOptionsConfigurationWithTooltipRed
                                };
                                this.myChartData = new Chart(this.ctx, config);
                            }
                        );
                    }
                );
            }
        );
    }

    public updateOptions(is: boolean) {
        if (is){
            this.myChartData.data.datasets[0].data = this.proENb;
            this.myChartData.data.labels = this.proENames;
            this.myChartData.update();
        }else{
            this.myChartData.data.datasets[0].data = this.depENb;
            this.myChartData.data.labels = this.depENames;
            this.myChartData.update();
        }
    }
}
