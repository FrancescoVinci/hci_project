"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import hc_more from "highcharts/highcharts-more"
import lollipop from "highcharts/modules/lollipop"
import dumbell from "highcharts/modules/dumbbell";
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";

hc_more(Highcharts);
dumbell(Highcharts); // dependency for lollipop
lollipop(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);

const Page = () => {

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
            }
        },
    
        legend: {
            enabled: true
        },
    
        subtitle: {
            text: 'subtitle',
            align: 'left'
        },
    
        title: {
            text: 'Top 10 Countries by Population',
            align: 'left'
        },
    
        tooltip: {
            crosshairs: true,
            shared: true
        },
    
        xAxis: {
            type: 'category'
        },
    
        yAxis: [
            {
                title: {
                    text: 'Levels'
                },
                labels:{
                    formatter:function(){
                        if(this.value == 0){
                            return 'NONE';
                        }
                        else if(this.value == 1) {
                            return 'LOW';
                        }
                        else if(this.value == 2) {
                            return 'MEDIUM';
                        }
                        else if(this.value == 3) {
                            return 'HIGH';
                        }
                    }
                } 
            },
            {
                // linegraph
                opposite: true
            },
        ],

        series: [
            {
                type: 'lollipop',
                name: 'Wind',
                yAxis: 1,
                data: [
                    {
                        name: 'Path 1',
                        y: 1, type: 'lollipop',
                        name: 'Path 2',
                        y: 1,
                    }, 
                    {
                        name: 'Path 3',
                        y: 1,
                    }, 
                    {
                        name: 'Path 4',
                        y: 1,
                    }, 
                    {
                        name: 'Path 5',
                        y: 1,
                    }, 
                    {
                        name: 'Path 6',
                        y: 1,
                    }, 
                    {
                        name: 'Path 7',
                        y: 2,
                    },
                    {
                        name: 'Path 8',
                        y: 1,
                    }, 
                    {
                        name: 'Path 9',
                        y: 1,
                    }, 
                    {
                        name: 'Path 10',
                        y: 2,
                    }, 
                    {
                        name: 'Path 11',
                        y: 2,
                    }, 
                    {
                        name: 'Path 12',
                        y: 1,
                    }, 
                    {
                        name: 'Path 13',
                        y: 1,
                    }, 
                    {
                        name: 'Path 14',
                        y: 1,
                    }, 
                    {
                        name: 'Path 15',
                        y: 1,
                    }
                ] 
            }, 
            {
                type: 'lollipop',
                name: 'Environmental Noise',
                yAxis: 1,
                data: [
                    {
                        name: 'Path 1',
                        y: 1,
                    },
                    {
                        name: 'Path 2',
                        y: 1,
                    }, 
                    {
                        name: 'Path 3',
                        y: 1,
                    }, 
                    {
                        name: 'Path 4',
                        y: 1,
                    }, 
                    {
                        name: 'Path 5',
                        y: 1,
                    }, 
                    {
                        name: 'Path 6',
                        y: 2,
                    }, 
                    {
                        name: 'Path 7',
                        y: 2,
                    },
                    {
                        name: 'Path 8',
                        y: 1,
                    }, 
                    {
                        name: 'Path 9',
                        y: 2,
                    }, 
                    {
                        name: 'Path 10',
                        y: 1,
                    }, 
                    {
                        name: 'Path 11',
                        y: 1,
                    }, 
                    {
                        name: 'Path 12',
                        y: 1,
                    }, 
                    {
                        name: 'Path 13',
                        y: 2,
                    }, 
                    {
                        name: 'Path 14',
                        y: 2,
                    }, 
                    {
                        name: 'Path 15',
                        y: 3,
                    }
                ] 
            }, 
            {
                type: 'lollipop',
                name: 'Quantity of Vehicles',
                yAxis: 1,
                data: [
                    {
                        name: 'Path 1',
                        y: 3,
                    },
                    {
                        name: 'Path 2',
                        y: 3,
                    }, 
                    {
                        name: 'Path 3',
                        y: 0,
                    }, 
                    {
                        name: 'Path 4',
                        y: 0,
                    }, 
                    {
                        name: 'Path 5',
                        y: 0,
                    }, 
                    {
                        name: 'Path 6',
                        y: 0,
                    }, 
                    {
                        name: 'Path 7',
                        y: 1,
                    },
                    {
                        name: 'Path 8',
                        y: 0,
                    }, 
                    {
                        name: 'Path 9',
                        y: 3,
                    }, 
                    {
                        name: 'Path 10',
                        y: 3,
                    }, 
                    {
                        name: 'Path 11',
                        y: 2,
                    }, 
                    {
                        name: 'Path 12',
                        y: 2,
                    }, 
                    {
                        name: 'Path 13',
                        y: 0,
                    }, 
                    {
                        name: 'Path 14',
                        y: 2,
                    }, 
                    {
                        name: 'Path 15',
                        y: 3,
                    }
                ] 
            }, 
            {
                type: 'lollipop',
                name: 'Quantity of People',
                yAxis: 1,
                data: [
                    {
                        name: 'Path 1',
                        y: 3,
                    },
                    {
                        name: 'Path 2',
                        y: 2,
                    }, 
                    {
                        name: 'Path 3',
                        y: 1,
                    }, 
                    {
                        name: 'Path 4',
                        y: 3,
                    }, 
                    {
                        name: 'Path 5',
                        y: 3,
                    }, 
                    {
                        name: 'Path 6',
                        y: 2,
                    }, 
                    {
                        name: 'Path 7',
                        y: 3,
                    },
                    {
                        name: 'Path 8',
                        y: 1,
                    }, 
                    {
                        name: 'Path 9',
                        y: 1,
                    }, 
                    {
                        name: 'Path 10',
                        y: 0,
                    }, 
                    {
                        name: 'Path 11',
                        y: 1,
                    }, 
                    {
                        name: 'Path 12',
                        y: 1,
                    }, 
                    {
                        name: 'Path 13',
                        y: 3,
                    }, 
                    {
                        name: 'Path 14',
                        y: 3,
                    }, 
                    {
                        name: 'Path 15',
                        y: 3,
                    }
                ] 
            },
            {
                type: 'spline',
                name: 'CO2',
                yAxis: 2,
                data: [
                    {
                        name: 'Path 1',
                        y: 494,
                    },
                    {
                        name: 'Path 2',
                        y: 437,
                    }, 
                    {
                        name: 'Path 3',
                        y: 479,
                    }, 
                    {
                        name: 'Path 4',
                        y: 478,
                    }, 
                    {
                        name: 'Path 5',
                        y: 476,
                    }, 
                    {
                        name: 'Path 6',
                        y: 481,
                    }, 
                    {
                        name: 'Path 7',
                        y: 473,
                    },
                    {
                        name: 'Path 8',
                        y: 463,
                    }, 
                    {
                        name: 'Path 9',
                        y: 461,
                    }, 
                    {
                        name: 'Path 10',
                        y: 461,
                    }, 
                    {
                        name: 'Path 11',
                        y: 461,
                    }, 
                    {
                        name: 'Path 12',
                        y: 463,
                    }, 
                    {
                        name: 'Path 13',
                        y: 488,
                    }, 
                    {
                        name: 'Path 14',
                        y: 478,
                    }, 
                    {
                        name: 'Path 15',
                        y: 500,
                    }
                ] 
            },
        ]
    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Lollipop Series</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="default">Default</Chip>
                    <Chip color="primary">Primary</Chip>
                    <Chip color="secondary">Secondary</Chip>
                    <Chip color="success">Success</Chip>
                    <Chip color="warning">Warning</Chip>
                    <Chip color="danger">Danger</Chip>
                </div>

                <p className="font-xl font-Roboto pt-5 mb-7">
                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. È
                    sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione,
                    pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei
                    fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
                    recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem
                    Ipsum.
                </p>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />

            </CardBody>

        </Card>

    );
}

export default Page;