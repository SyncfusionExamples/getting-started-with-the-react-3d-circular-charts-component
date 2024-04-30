import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective,
   PieSeries3D, Inject ,CircularChartDataLabel3D, CircularChartLegend3D,CircularChartTooltip3D} from '@syncfusion/ej2-react-charts';
 
import './App.css';

function App() {
  const circularData: any[] = [
    { x: 'Canada', y: 46 },
    { x: 'Hungary', y: 30 },
    { x: 'Germany', y: 79 },
    { x: 'Mexico', y: 13 },
    { x: 'China', y: 56 },
    { x: 'India', y: 41 },
    { x: 'Bangladesh', y: 25 },
    { x: 'United States', y: 32 },
    { x: 'Belgium', y: 34 }
  ];
  return (
    <div className="App">
      <CircularChart3DComponent tilt={-45} 
      enableRotation={true} 
       tooltip={{enable: true,
         format: "<b>${point.x}</b><br>Gold Medals: <b>${point.y}</b>"
        }}
      title='Berlin 2023 Special Olympics Gold Medals'
      legendSettings={{ visible: true, position:'Bottom' }}
       >
      <Inject services={[PieSeries3D,CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D]}/>
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective dataSource={circularData} xName='x' yName='y'
         radius='70%' 
        //innerRadius='40%'  legendShape='Rectangle'  
           dataLabel={{
          visible: true,
          position: 'Outside',
          name: 'x',
          connectorStyle: { length: '50px',  width: 2 },
          
        }}
        >
        </CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
      </CircularChart3DComponent>
    </div>
  );
}

export default App;
